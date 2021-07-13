from rest_framework import generics

from .models import Profile
from .serializers import NoteSerializer
from rest_framework import IsAuthenticated

# Create your views here.


class NotesAPIView(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = IsAuthenticated

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class NotesEditAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = IsAuthenticated

    def perform_create():
        pass


class NotesAdminAPIView(generics.RetrieveDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = IsAdmin
