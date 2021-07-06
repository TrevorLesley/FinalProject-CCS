from rest_framework import permissions


class IsAuthOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHOD:
            return True
        if request.method == "DELETE":
            return obj.user == request.user or request.user.is_staff

        return obj.user == request.user
