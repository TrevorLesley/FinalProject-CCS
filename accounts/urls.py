from django.urls import include, path

from .views import UserListAPIView, UserDetailAPIView, UserAdminAPIView

urlpatterns = [
    path("users/", UserListAPIView.as_view()),
    path("user/<int:pk>", UserDetailAPIView.as_view()),
    path("admin/user/<int:pk>", UserAdminAPIView.as_view()),
]
