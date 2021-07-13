from django.urls import path, include

urlpatterns = [
    path("users/", include("accounts.urls")),
    path("rest-auth/", include("rest_auth.urls")),
    path("users/notes/", include("notes.urls")),
]
