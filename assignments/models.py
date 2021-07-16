from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from accounts.models import User

# Create your models here.
class Assignment(models.Model):
    title = models.CharField(max_length=250)
    body = models.TextField(max_length=3000)
    due_date = models.DateTimeField(auto_now_add=False)
    is_complete = models.BooleanField(default=False)
    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    students = models.ForeignKey(
        User, related_name="assignments", on_delete=models.CASCADE
    )
