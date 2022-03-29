from django.db import models

class Endereco(models.Model):
    rua = models.CharField(max_length=50)
    numero = models.CharField(max_length=10)
    complemento = models.CharField(max_length=50)
    cep = models.PositiveIntegerField()
    bairro = models.CharField(max_length=50)
