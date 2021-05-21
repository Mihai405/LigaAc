# Generated by Django 3.1.7 on 2021-04-16 08:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0008_auto_20210414_1707'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='website',
            field=models.CharField(max_length=255, null=True, verbose_name='website'),
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