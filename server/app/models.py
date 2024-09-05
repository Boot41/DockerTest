from django.db import models

class JobListing(models.Model):
    title = models.CharField(max_length=255)
    employer_id = models.IntegerField()
    location = models.CharField(max_length=255)
    job_type = models.CharField(max_length=50)
    status = models.CharField(max_length=20, default='active')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title