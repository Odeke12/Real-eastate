from django.db import models
from datetime import datetime

class Realtor(models.Model):
    name = models.CharField(max_length = 52)
    photo = models.ImageField(upload_to='photos/%Y/%m/%d/')
    description = models.TextField(blank = True)
    phone_number = models.CharField(max_length = 100)
    email = models.CharField(max_length = 100)
    top_seller = models.BooleanField(default = False)
    date_hired = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.name
