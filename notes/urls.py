from django.urls import include, path

from .views import NotesAPIView

urlpatterns = [path("notes/", NotesAPIView.as_view()), path("<int:pk>/", Notes)]
