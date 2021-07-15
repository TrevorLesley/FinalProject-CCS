from django.urls import path

from .views import ClassroomListAPIView

urlpatterns = [
    path("roomlist/", ClassroomListAPIView.as_view()),
]
