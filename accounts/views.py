from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from .models import User
from .serializers import RegistrationSerializer
from .permissions import IsAuthOrReadOnly


class UserListAPIView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegistrationSerializer


class UserDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = RegistrationSerializer
    permission_classes = (IsAuthOrReadOnly,)


class UserAdminAPIView(generics.RetrieveDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = RegistrationSerializer
    permission_classes = IsAdminUser
