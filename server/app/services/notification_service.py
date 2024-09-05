from .models import Notification

class NotificationService:
    @staticmethod
    def create_notification(employer, message):
        Notification.objects.create(employer=employer, message=message)

    @staticmethod
    def get_notifications(employer_id):
        return Notification.objects.filter(employer_id=employer_id)
