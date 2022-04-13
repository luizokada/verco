from django.urls import path
from .views import Register


urlpatterns = [
    path('registro', Register.as_view(), name="Registro"),
]