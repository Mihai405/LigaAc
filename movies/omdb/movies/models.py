from django.db import models

# Create your models here.

class Movie(models.Model):

        title       =   models.CharField('title' , max_length=75 , null=True)
        year        =   models.CharField('year of appearance',  max_length=100  , default='', null=True)
        rated       =   models.CharField('rated' , max_length=10 , default='' , null=True)
        released    =   models.CharField('released' , max_length=255 , null=True)
        runtime     =   models.IntegerField('runtime', default=0 , null=True)
        genre       =   models.CharField('genre' , max_length=255 , default='' , null=True)
        director    =   models.CharField('models' , max_length=255 , default='' , null=True)
        writer      =   models.CharField('writer' , max_length=255 , default='' , null=True)
        actors      =   models.CharField('actors', max_length=255, default='' , null=True)
        plot        =   models.TextField('plot' , null=True)
        country     =   models.CharField('country' , max_length=255 , default='' , null=True)
        language    =   models.CharField('language' , max_length=255 , default='' , null=True)
        awards      =   models.CharField('awards' , max_length=255 , default='' , null=True)
        poster      =   models.CharField('poster' , max_length=255 , default='' , null=True)
        metascore   =   models.IntegerField('metascore', default=0, null=True)
        imdbvotes   =   models.CharField('imdbvotes', max_length=255 , null=True)
        imdbid      =   models.CharField('imdbid' , max_length=255 , default='' , null=True)
        type        =   models.CharField('type' , max_length=255 , default='' , null=True)
        dvd         =   models.IntegerField('dvd', default=0, null=True)
        boxoffice   =   models.CharField('boxoffice' , max_length=255 , default='' , null=True)
        production  =   models.CharField('production' , max_length=255 , default='' , null=True)
        website     =   models.CharField('website' , max_length=255 , default='' , null=True)


class Rating(models.Model):

        source      =   models.CharField('source' , max_length=255 , default='')
        value       =   models.CharField('value' , max_length=255 , default='')
        movie       =   models.ForeignKey( Movie , related_name='ratings' , on_delete=models.CASCADE)