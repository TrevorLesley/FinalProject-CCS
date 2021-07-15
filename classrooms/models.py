from django.db import models
from django.conf import settings

# from django.contrib.auth.models import User

# Create your models here.


class Classroom(models.Model):
    instructor = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    class_name = models.CharField(max_length=200)
    students = models.ManyToManyField(
        settings.AUTH_USER_MODEL, related_name="classroom"
    )

    def __str__(self):
        return self.class_name
