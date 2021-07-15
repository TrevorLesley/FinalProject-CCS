from rest_framework import serializers

from .models import Note


class NoteSerializer(serializers.Serializer):
    class Meta:
        model = Note
        fields = "__all__"
