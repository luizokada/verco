from django.db import models
from django.utils.translation import gettext_lazy as _
from consumer.models import Consumer


class Product(models.Model):
    name = models.CharField(max_length=60)
    value = models.DecimalField(decimal_places=2, max_digits=9)
    slug = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class Ad(models.Model):
    product = models.OneToOneField(Product, on_delete = models.CASCADE)


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
