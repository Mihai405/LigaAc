from rest_framework import viewsets

from .models import Movie
from .serializer import MovieSerializer

class MovieView(viewsets.ModelViewSet):

    queryset          = Movie.objects.all()
    serializer_class  = MovieSerializer