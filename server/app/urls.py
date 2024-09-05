from django.urls import path
from .views import JobListingCreateView, JobListingListView, JobSearchView, JobDetailView, AdminJobListingView, AdminJobStatusUpdateView

urlpatterns = [
    path('api/jobs', JobListingCreateView.as_view(), name='create_job'),
    path('api/employers/<int:employer_id>/jobs', JobListingListView.as_view(), name='list_jobs'),
    path('api/jobs/search', JobSearchView.as_view(), name='search_jobs'),
    path('api/jobs/<int:job_id>', JobDetailView.as_view(), name='job_detail'),
    path('api/admin/jobs', AdminJobListingView.as_view(), name='admin_list_jobs'),
    path('api/admin/jobs/<int:job_id>/status', AdminJobStatusUpdateView.as_view(), name='admin_update_job_status'),
]