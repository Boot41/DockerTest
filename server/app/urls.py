from django.urls import path
from .views import JobListingCreateView, JobListingListView, JobSearchView, JobDetailView

urlpatterns = [
    path('api/jobs', JobListingCreateView.as_view(), name='create_job'),
    path('api/employers/<int:employer_id>/jobs', JobListingListView.as_view(), name='list_jobs'),
    path('api/jobs/search', JobSearchView.as_view(), name='search_jobs'),
    path('api/jobs/<int:job_id>', JobDetailView.as_view(), name='job_detail'),
]