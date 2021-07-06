from django.urls import include, path

from .views import ProfileListAPIView

urlpatterns = [
    path("profiles/", ProfileListAPIView.as_view()),
]
