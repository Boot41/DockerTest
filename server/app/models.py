from django.db import models

class JobListing(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    employer_id = models.ForeignKey('Employer', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
