from django.urls import path

from .views import (
    ClassroomListAPIView,
    ClassroomListCreateAPIView,
    ClassroomEditAPIView,
    ClassroomAdminAPIView,
)

urlpatterns = [
    path("roomlist/", ClassroomListAPIView.as_view()),
    path("classroom-l-c/", ClassroomListCreateAPIView.as_view()),
    path("classroom-edit/", ClassroomEditAPIView.as_view()),
    path("classroom-admin/", ClassroomAdminAPIView.as_view()),
]
