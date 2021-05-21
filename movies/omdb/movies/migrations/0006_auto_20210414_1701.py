# Generated by Django 3.1.7 on 2021-04-14 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0005_auto_20210414_1700'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='actors',
            field=models.CharField(default='', max_length=255, verbose_name='actors'),
        ),
        migrations.AddField(
            model_name='movie',
            name='awards',
            field=models.CharField(default='', max_length=255, verbose_name='awards'),
        ),
        migrations.AddField(
            model_name='movie',
            name='boxoffice',
            field=models.IntegerField(default=0, verbose_name='boxoffice'),
        ),
        migrations.AddField(
            model_name='movie',
            name='country',
            field=models.CharField(default='', max_length=255, verbose_name='country'),
        ),
        migrations.AddField(
            model_name='movie',
            name='director',
            field=models.CharField(default='', max_length=255, verbose_name='models'),
        ),
        migrations.AddField(
            model_name='movie',
            name='dvd',
            field=models.IntegerField(default=0, verbose_name='dvd'),
        ),
        migrations.AddField(
            model_name='movie',
            name='genre',
            field=models.CharField(default='', max_length=255, verbose_name='genre'),
        ),
        migrations.AddField(
            model_name='movie',
            name='imdbid',
            field=models.CharField(default='', max_length=255, verbose_name='imdbid'),
        ),
        migrations.AddField(
            model_name='movie',
            name='imdbvotes',
            field=models.IntegerField(default=0, verbose_name='imdbvotes'),
        ),
        migrations.AddField(
            model_name='movie',
            name='language',
            field=models.CharField(default='', max_length=255, verbose_name='language'),
        ),
        migrations.AddField(
            model_name='movie',
            name='metascore',
            field=models.IntegerField(default=0, verbose_name='metascore'),
        ),
        migrations.AddField(
            model_name='movie',
            name='plot',
            field=models.CharField(default='', max_length=255, verbose_name='plot'),
        ),
        migrations.AddField(
            model_name='movie',
            name='poster',
            field=models.CharField(default='', max_length=255, verbose_name='poster'),
        ),
        migrations.AddField(
            model_name='movie',
            name='production',
            field=models.CharField(default='', max_length=255, verbose_name='production'),
        ),
        migrations.AddField(
            model_name='movie',
            name='rated',
            field=models.CharField(default='', max_length=10, verbose_name='rated'),
        ),
        migrations.AddField(
            model_name='movie',
            name='released',
            field=models.IntegerField(default=0, verbose_name='released'),
        ),
        migrations.AddField(
            model_name='movie',
            name='runtime',
            field=models.IntegerField(default=0, verbose_name='runtime'),
        ),
        migrations.AddField(
            model_name='movie',
            name='type',
            field=models.CharField(default='', max_length=255, verbose_name='type'),
        ),
        migrations.AddField(
            model_name='movie',
            name='website',
            field=models.CharField(max_length=255, null=True, verbose_name='production'),
        ),
        migrations.AddField(
            model_name='movie',
            name='writer',
            field=models.CharField(default='', max_length=255, verbose_name='writer'),
        ),
        migrations.AddField(
            model_name='movie',
            name='year',
            field=models.IntegerField(default=0, verbose_name='year of appearance'),
        ),
    ]
