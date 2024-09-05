from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import JobListing, JobApplication, Notification
from .serializers import JobListingSerializer, JobApplicationSerializer, NotificationSerializer

class JobListingCreateView(APIView):
    def post(self, request):
        serializer = JobListingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class JobListingListView(APIView):
    def get(self, request, employer_id):
        job_listings = JobListing.objects.filter(employer_id=employer_id)
        serializer = JobListingSerializer(job_listings, many=True)
        return Response(serializer.data)

class JobSearchView(APIView):
    def get(self, request):
        keywords = request.query_params.get('keywords', '')
        location = request.query_params.get('location', '')
        job_type = request.query_params.get('job_type', '')

        job_listings = JobListing.objects.all()
        if keywords:
            job_listings = job_listings.filter(title__icontains=keywords)
        if location:
            job_listings = job_listings.filter(location__icontains=location)
        if job_type:
            job_listings = job_listings.filter(job_type__icontains=job_type)

        serializer = JobListingSerializer(job_listings, many=True)
        return Response(serializer.data)

class JobDetailView(APIView):
    def get(self, request, job_id):
        try:
            job_listing = JobListing.objects.get(id=job_id)
            serializer = JobListingSerializer(job_listing)
            return Response(serializer.data)
        except JobListing.DoesNotExist:
            return Response({'error': 'Job not found'}, status=status.HTTP_404_NOT_FOUND)

class AdminJobListingView(APIView):
    def get(self, request):
        status_filter = request.query_params.get('status', None)
        job_listings = JobListing.objects.all()
        if status_filter:
            job_listings = job_listings.filter(status=status_filter)
        serializer = JobListingSerializer(job_listings, many=True)
        return Response(serializer.data)

class AdminJobStatusUpdateView(APIView):
    def patch(self, request, job_id):
        try:
            job_listing = JobListing.objects.get(id=job_id)
            status = request.data.get('status')
            if status:
                job_listing.status = status
                job_listing.save()
                return Response({'success': 'Job status updated'}, status=status.HTTP_200_OK)
            return Response({'error': 'Status not provided'}, status=status.HTTP_400_BAD_REQUEST)
        except JobListing.DoesNotExist:
            return Response({'error': 'Job not found'}, status=status.HTTP_404_NOT_FOUND)

class JobApplicationSubmitView(APIView):
    def post(self, request, job_id):
        job_listing = JobListing.objects.get(id=job_id)
        serializer = JobApplicationSerializer(data=request.data)
        if serializer.is_valid():
            application = serializer.save(job_listing=job_listing)
            # Create a notification for the employer
            Notification.objects.create(
                employer=job_listing.employer,
                message=f'New application received for {job_listing.title}',
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CandidateApplicationHistoryView(APIView):
    def get(self, request, candidate_id):
        applications = JobApplication.objects.filter(candidate_id=candidate_id)
        serializer = JobApplicationSerializer(applications, many=True)
        return Response(serializer.data)

class NotificationListView(APIView):
    def get(self, request, employer_id):
        notifications = Notification.objects.filter(employer_id=employer_id)
        serializer = NotificationSerializer(notifications, many=True)
        return Response(serializer.data)

class NotificationReadView(APIView):
    def patch(self, request, employer_id, notification_id):
        try:
            notification = Notification.objects.get(id=notification_id, employer_id=employer_id)
            notification.is_read = True
            notification.save()
            return Response({'success': 'Notification marked as read'}, status=status.HTTP_200_OK)
        except Notification.DoesNotExist:
            return Response({'error': 'Notification not found'}, status=status.HTTP_404_NOT_FOUND)