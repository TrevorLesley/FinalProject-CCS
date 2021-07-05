from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    pass


class AdminUser(models.Model):
    pass


class Profile(models.Model):
    user = (models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE),)
    avatar = models.ImageField(upload_to="profiles")
    display_name = models.CharField(max_length=40)

    def __str__(self):
        return self.display_name
