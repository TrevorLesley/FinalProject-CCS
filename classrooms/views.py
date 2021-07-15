from rest_framework import generics
from rest_framework.permissions import IsAdminUser
from .serializers import ClassroomSerializer

from .models import Classroom

# Create your views here.


class ClassroomListAPIView(generics.ListCreateAPIView):
    queryset = Classroom.objects.all()
    serializer_class = ClassroomSerializer

    def get_queryset(self):
        owner = self.request.user
        return Classroom.objects.filter(instructor=owner)
