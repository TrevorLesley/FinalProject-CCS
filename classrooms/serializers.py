from rest_framework import serializers
from .models import Classroom


class ClassroomSerializer(serializers.Serializer):
    class Meta:
        model = Classroom
        fields = "__all__"
