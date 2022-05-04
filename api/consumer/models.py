from django.db import models
from django_cryptography.fields import encrypt


# O MODULE DE CONSUMER FOI DESCONTINUADO, AGORA SEGUIMOS COM O MODULE USERAPP, QUE SEGUE O PADRAO REST PARA CRIAR USUARIOS


class Address(models.Model):
    street = models.CharField(max_length=60)
    number = models.CharField(max_length=8)
    complement = models.CharField(max_length=60)
    ZIP = models.CharField(max_length=8)
    neighborhood = models.CharField(max_length=60)

    def __str__(self):
        return self.street


class Consumer(models.Model):
    name = models.CharField(max_length=60)
    email = models.CharField(max_length=60, unique=True)
    cpf = models.CharField(max_length=12, unique=True, default='')
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    # clickedAds = models.ManyToManyField(core.models.Ad)
    password = encrypt(models.CharField(max_length=64))

    def __str__(self):
        return self.name
