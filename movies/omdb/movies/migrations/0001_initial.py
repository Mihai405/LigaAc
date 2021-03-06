# Generated by Django 3.1.7 on 2021-05-23 12:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=75, null=True, verbose_name='title')),
                ('year', models.CharField(default='', max_length=100, null=True, verbose_name='year of appearance')),
                ('rated', models.CharField(default='', max_length=10, null=True, verbose_name='rated')),
                ('released', models.CharField(max_length=255, null=True, verbose_name='released')),
                ('runtime', models.IntegerField(default=0, null=True, verbose_name='runtime')),
                ('genre', models.CharField(default='', max_length=255, null=True, verbose_name='genre')),
                ('director', models.CharField(default='', max_length=255, null=True, verbose_name='models')),
                ('writer', models.CharField(default='', max_length=255, null=True, verbose_name='writer')),
                ('actors', models.CharField(default='', max_length=255, null=True, verbose_name='actors')),
                ('plot', models.TextField(null=True, verbose_name='plot')),
                ('country', models.CharField(default='', max_length=255, null=True, verbose_name='country')),
                ('language', models.CharField(default='', max_length=255, null=True, verbose_name='language')),
                ('awards', models.CharField(default='', max_length=255, null=True, verbose_name='awards')),
                ('poster', models.CharField(default='', max_length=255, null=True, verbose_name='poster')),
                ('metascore', models.IntegerField(default=0, null=True, verbose_name='metascore')),
                ('imdbvotes', models.CharField(max_length=255, null=True, verbose_name='imdbvotes')),
                ('imdbid', models.CharField(default='', max_length=255, null=True, verbose_name='imdbid')),
                ('type', models.CharField(default='', max_length=255, null=True, verbose_name='type')),
                ('dvd', models.IntegerField(default=0, null=True, verbose_name='dvd')),
                ('boxoffice', models.CharField(default='', max_length=255, null=True, verbose_name='boxoffice')),
                ('production', models.CharField(default='', max_length=255, null=True, verbose_name='production')),
                ('website', models.CharField(default='', max_length=255, null=True, verbose_name='website')),
            ],
        ),
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('source', models.CharField(default='', max_length=255, verbose_name='source')),
                ('value', models.CharField(default='', max_length=255, verbose_name='value')),
                ('movie', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ratings', to='movies.movie')),
            ],
        ),
    ]
