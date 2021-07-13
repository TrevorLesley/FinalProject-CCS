from django.urls import include, path

from .views import UserListAPIView

urlpatterns = [
    path("users/", UserListAPIView.as_view()),
]
