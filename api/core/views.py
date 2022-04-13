from django.shortcuts import render

from rest_framework import viewsets
from .models import Product
from .serializers import ProductSerializer


def index(request):
    return render(request, 'index.html')


def aboutUs(request):
    return render(request, 'sobre.html')


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by('name')
    serializer_class = ProductSerializer


def consumerRegister(request):
    return render(request, 'cadastroConsumidor.html')


def companyRegister(request):
    return render(request, 'cadastroEmpresa.html')