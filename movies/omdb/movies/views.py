from rest_framework import viewsets
from rest_framework import permissions
from rest_framework import filters
from .models import Movie
from .serializer import MovieSerializer

class MovieView(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset          = Movie.objects.all()
    serializer_class  = MovieSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title',]