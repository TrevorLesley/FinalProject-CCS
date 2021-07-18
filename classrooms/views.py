from rest_framework import generics
from rest_framework.permissions import IsAdminUser
from .serializers import ClassroomSerializer, ClassroomListSerializer

from .models import Classroom

# Create your views here.


class ClassroomListAPIView(generics.ListAPIView):
    queryset = Classroom.objects.all()
    serializer_class = ClassroomListSerializer


class ClassroomListCreateAPIView(generics.ListCreateAPIView):
    queryset = Classroom.objects.all()
    serializer_class = ClassroomSerializer

    def get_queryset(self):
        owner = self.request.user
        return Classroom.objects.filter(instructor=owner)


class ClassroomEditAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Classroom.objects.all()
    serializer_class = ClassroomSerializer


class ClassroomAdminAPIView(generics.RetrieveDestroyAPIView):
    queryset = Classroom.objects.all()
    serializer_class = ClassroomSerializer
