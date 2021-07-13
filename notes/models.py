from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class Note(models.Model):
    user = models.ManyToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    body = models.CharField(max_length=2000)
    created_at = models.DateTimeField(auto_now_add=True)
