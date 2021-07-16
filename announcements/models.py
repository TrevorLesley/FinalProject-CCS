from django.db import models
from django.conf import settings
from django.contrib.auth.models import User

# Create your models here.
class Announcement(models.Model):
    title = models.CharField(max_length=250)
    body = models.TextField(max_length=3000)
    date = models.DateTimeField(auto_now_add=True)
