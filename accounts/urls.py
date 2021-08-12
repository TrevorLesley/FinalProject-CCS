from django.urls import include, path

from .views import UserListAPIView, UserDetailAPIView, UserAdminAPIView

urlpatterns = [
    path("users/", UserListAPIView.as_view()),
    path("user/<int:pk>", UserDetailAPIView.as_view()),
    path("admin/user/<int:pk>", UserAdminAPIView.as_view()),
]


# from accounts.views import UserViewSet
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r"users", UserViewSet, basename="user")
# urlpatterns = router.urls
