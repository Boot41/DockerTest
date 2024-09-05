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
