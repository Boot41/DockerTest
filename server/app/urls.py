from django.urls import path
from .views import JobListingCreateView, JobListingListView

urlpatterns = [
    path('api/jobs', JobListingCreateView.as_view(), name='create_job'),
    path('api/employers/<int:employer_id>/jobs', JobListingListView.as_view(), name='list_jobs'),
]
