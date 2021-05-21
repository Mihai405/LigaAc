# Generated by Django 3.1.7 on 2021-04-16 11:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0014_auto_20210416_1141'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='boxoffice',
            field=models.CharField(max_length=255, null=True, verbose_name='boxoffice'),
        ),
        migrations.AlterField(
            model_name='movie',
            name='dvd',
            field=models.CharField(max_length=255, null=True, verbose_name='dvd'),
        ),
        migrations.AlterField(
            model_name='movie',
            name='imdbvotes',
            field=models.CharField(max_length=255, null=True, verbose_name='imdbvotes'),
        ),
    ]