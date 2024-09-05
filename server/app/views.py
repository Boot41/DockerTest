from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import JobListing
from .serializers import JobListingSerializer

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