from django.db import models
from django.utils.translation import gettext_lazy as _
from django_cryptography.fields import encrypt


class Product(models.Model):
    name = models.CharField(max_length=60)
    value = models.DecimalField(decimal_places=2, max_digits=9)
    slug = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class Address(models.Model):
    street = models.CharField(max_length=60)
    number = models.CharField(max_length=8)
    complement = models.CharField(max_length=60)
    ZIP = models.CharField(max_length=8)
    neighborhood = models.CharField(max_length=60)


class Login(models.Model):
    email = models.CharField(max_length=60, primary_key=True)
    password = encrypt(models.CharField(max_length=64))


class Ad(models.Model):
    product = models.OneToOneField(Product, on_delete = models.CASCADE)


class Consumer(models.Model):
    name = models.CharField(max_length=60)
    email = models.ForeignKey(Login, on_delete = models.CASCADE)
    address = models.ForeignKey(Address, on_delete = models.CASCADE)
    clickedAds = models.ManyToManyField(Ad)

    def __str__(self):
        return self.name


class Purchase(models.Model):
    product = models.ManyToManyField(Product)
    consumer = models.OneToOneField(Consumer, on_delete = models.CASCADE)

    class PurchaseStatuses(models.TextChoices):
        AGUARDANDO_PAGAMENTO = 'AGPG', _('Aguardando Pagamento')
        PAGAMENTO_CONFIRMADO = 'PGCF', _('Pagamento Confirmado')
        ENVIADO = 'ENVI', _('Enviado')
        FINALIZADO = 'FINA', _('Finalizado')
        CANCELADO = 'CANC', _('Cancelado')

    status = models.CharField(max_length=4, choices=PurchaseStatuses.choices, default=PurchaseStatuses.AGUARDANDO_PAGAMENTO)
