from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    pass


class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to="profiles", blank=True)
    display_name = models.CharField(max_length=40)
    email = models.EmailField(max_length=200, unique=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_instructor = models.BooleanField(default=False)

    def __str__(self):
        return self.display_name
