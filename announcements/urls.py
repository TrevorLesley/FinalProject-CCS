from django.urls import path

from .views import AnnouncementsAPIView

urlpatterns = [
    path("announcements-list/", AnnouncementsAPIView.as_view()),
]
