from django.urls import include, path

from .views import NotesAPIView, NotesEditAPIView, NotesAdminAPIView

urlpatterns = [
    path("noteslist/", NotesAPIView.as_view()),
    path("note/<int:pk>/", NotesEditAPIView.as_view()),
    path("admin/<int:pk>/", NotesAdminAPIView.as_view()),
]
