from django.db import models
from django_cryptography.fields import encrypt
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin
from django.utils import timezone
from django.utils.translation import gettext_lazy as _


class UserManager(BaseUserManager):
    def _create_user(self, username, email, password, is_superuser, is_staff, **extra_fields):
        now = timezone.now()
        if not username:
            raise ValueError(('Deve ter um nome de usuário!'))
        email = self.normalize_email(email)
        user = self.model(username=username, email=email,
                          is_staff=is_staff, is_active=True,
                          is_superuser=is_superuser, last_login=now,
                          date_joined=now, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username, email=None, password=None, **extra_fields):
        return self._create_user(username, email, password, False, False,
                                 **extra_fields)

    def create_superuser(self, username, email, password, **extra_fields):
        user = self._create_user(username, email, password, True, True,
                                 **extra_fields)
        user.is_active = True
        user.save(using=self._db)
        return user

    def create_staffuser(self, username, email, password, **extra_fields):
        user = self._create_user(username, email, password, False, True,
                                 **extra_fields)
        user.is_active = True
        user.save(using=self._db)
        return user


class User(AbstractUser, PermissionsMixin):
    name = models.CharField(max_length=60)
    username = models.CharField(max_length=15, unique=True)
    email = models.CharField(max_length=60, unique=True)
    cpf = models.CharField(max_length=12, unique=True, default='')
    password = encrypt(models.CharField(max_length=64))
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)

    class Plans(models.TextChoices):
        CONSUMIDOR = 'CONS', _('Consumidor')
        MENSAL = 'MENS', _('Mensal')
        SEMESTRAL = 'SEME', _('Semestral')
        ANUAL = 'ANUA', _('Anual')
        CANCELADO = 'CANC', _('Cancelado')

    plan = models.CharField(max_length=4, choices=Plans.choices, default=Plans.CONSUMIDOR)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    objects = UserManager()

    def __str__(self):
        return self.name

# class Address(models.Model):
#     street = models.CharField(max_length=60)
#     number = models.CharField(max_length=8)
#     complement = models.CharField(max_length=60)
#     ZIP = models.CharField(max_length=8)
#     neighborhood = models.CharField(max_length=60)
#
#     def __str__(self):
#         return self.street
