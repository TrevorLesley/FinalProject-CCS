from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer
from .models import User


class RegistrationSerializer(RegisterSerializer):
    class Meta:
        model = User
        fields = "__all__"

    def custom_signup(self, request, user):
        user.avatar = self.validated_data.get("avatar", "")
        user.save(
            update_fields=[
                "avatar",
            ]
        )
