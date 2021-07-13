from django.urls import include, path

from .views import NotesAPIView, NotesEditAPIView, NotesAdminAPIView

urlpatterns = [
    path("users/notes/", NotesAPIView.as_view()),
    path("users/notes/<int:pk>/", NotesEditAPIView.as_view()),
    path("admin/<int:pk>/", NotesAdminAPIView.as_view()),
]
