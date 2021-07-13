from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    avatar = models.ImageField(upload_to="profiles", blank=True, null=True)
    is_instructor = models.BooleanField(default=False)

    def __str__(self):
        return self.username
