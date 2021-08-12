from rest_framework import generics

# from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser

from .models import Profile, User
from .serializers import RegistrationSerializer, AccountSerializer
from .permissions import IsAuthOrReadOnly


# class UserViewSet(viewsets.ModelViewSet):
#     serializer_class = RegistrationSerializer
#     queryset = Profile.objects.all()


class UserListAPIView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegistrationSerializer


class UserDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = AccountSerializer
    permission_classes = (IsAuthOrReadOnly,)


class UserAdminAPIView(generics.RetrieveDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = AccountSerializer
    permission_classes = IsAdminUser
