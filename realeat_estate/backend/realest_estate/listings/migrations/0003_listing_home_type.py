# Generated by Django 3.1.3 on 2020-12-16 07:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0002_auto_20201215_1313'),
    ]

    operations = [
        migrations.AddField(
            model_name='listing',
            name='home_type',
            field=models.CharField(choices=[('House', 'House'), ('Condo', 'Condo'), ('TownHouse', 'Townhouse')], default='House', max_length=50),
        ),
    ]
