from rest_framework import generics
from .models import Announcement
from django.conf import settings
from .serializers import AnnouncementSerializer


# Create your views here.


class AnnouncementsAPIView(generics.ListAPIView):
    serializer_class = AnnouncementSerializer


class AnnouncementsCreateAPIView(generics.ListCreateAPIView):
    serializer_class = AnnouncementSerializer
