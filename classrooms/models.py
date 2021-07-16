from django.db import models
from django.conf import settings
from announcements.models import Announcement
from accounts.models import User
from assignments.models import Assignment

# from django.contrib.auth.models import User

# Create your models here.


class Classroom(models.Model):
    instructor = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="classrooms"
    )
    class_name = models.CharField(max_length=200)
    students = models.ForeignKey(
        User,
        related_name="classroom",
        on_delete=models.CASCADE,
    )
    announcements = models.ForeignKey(
        Announcement,
        related_name="classroom",
        on_delete=models.CASCADE,
        blank=True,
        default=None,
    )

    def __str__(self):
        return self.class_name
