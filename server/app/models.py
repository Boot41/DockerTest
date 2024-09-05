from django.db import models

class Employer(models.Model):
    name = models.CharField(max_length=255)

class JobListing(models.Model):
    title = models.CharField(max_length=255)
    employer = models.ForeignKey(Employer, on_delete=models.CASCADE)
    status = models.CharField(max_length=50)

class JobApplication(models.Model):
    job_listing = models.ForeignKey(JobListing, on_delete=models.CASCADE)
    candidate_id = models.IntegerField()
    applied_at = models.DateTimeField(auto_now_add=True)

class Notification(models.Model):
    employer = models.ForeignKey(Employer, on_delete=models.CASCADE)
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
