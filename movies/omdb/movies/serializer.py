from rest_framework import serializers

from .models import Rating
from .models import Movie

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Rating
        fields = ['source', 'value', ]

class MovieSerializer(serializers.ModelSerializer):

    ratings    =  RatingSerializer(many=True)

    class Meta:
        model  = Movie
        fields = '__all__'
