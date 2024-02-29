from django.db import models

class homepage (models.Model):
    firtsname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    nickname = models.CharField(max_length=255)  

# Create your models here.
