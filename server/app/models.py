from django.db import models

class JobListing(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    job_type = models.CharField(max_length=50)
    employer_id = models.IntegerField()
    status = models.CharField(max_length=20, default='open')

    def __str__(self):
        return self.title

class JobApplication(models.Model):
    job_listing = models.ForeignKey(JobListing, on_delete=models.CASCADE)
    candidate_id = models.IntegerField()
    application_data = models.JSONField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Application for {self.job_listing.title} by candidate {self.candidate_id}'