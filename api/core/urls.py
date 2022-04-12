from django.urls import path
from core.views import index, aboutUs, showProducts, consumerRegister, companyRegister

urlpatterns = [
    path('', index),
    path('sobre', aboutUs),
    path('produtos', showProducts),
    path('cadastro-consumidor', consumerRegister),
    path('cadastro-empresa', companyRegister),
]