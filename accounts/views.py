from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from .models import User
from .serializers import RegisterSerializer
from .permissions import IsAuthOrReadOnly


class UserListAPIView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


class UserDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = (IsAuthOrReadOnly,)


class UserAdminAPIView(generics.RetrieveDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = IsAdminUser
