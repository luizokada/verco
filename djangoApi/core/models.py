from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=60)
    value = models.DecimalField(decimal_places=2, max_digits=9)
    slug = models.CharField(max_length=30)

    def __str__(self):
        return self.name


# class Consumer(models.Model):
#     name = models.CharField(max_length=60)
#     # address = models.ManyToOneRel(Address)
#     # login = models.OneToOneField(Login)
#     # clickedAds =
#     # madePurchases =

    # def __str__(self):
    #     return self.name
#
#
# class Login(models.Model):
#     email = models.CharField(max_length=60)
#     # password = models.
#
#
# class Address(models.Model):
#     street = models.CharField(max_length=60)
#     number = models.CharField(max_length=8)
#     complement = models.CharField(max_length=60)
#     ZIP = models.PositiveBigIntegerField(max_length=8)
#     neighborhood = models.CharField(max_length=60)
#
#
# class Ad(models.Model):
#     product = Product
#
#
# class Purchase(models.Model):
#     product = Product
#    # status = PurchaseStatuses
#
#
# class PurchaseStatuses(models.Model):
#     pass