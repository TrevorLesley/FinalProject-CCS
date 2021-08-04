from django.urls import path, include

urlpatterns = [
    path("users/", include("accounts.urls")),
    path("rest-auth/", include("rest_auth.urls")),
    path("notes/", include("notes.urls")),
    path("classrooms/", include("classrooms.urls")),
    path("announcements/", include("announcements.urls")),
]
