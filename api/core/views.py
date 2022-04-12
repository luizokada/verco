from django.shortcuts import render


# Create your views here.

def index(request):
    return render(request, 'index.html')


def aboutUs(request):
    return render(request, 'sobre.html')


def showProducts(request):
    return render(request, 'produtos.html')


def consumerRegister(request):
    return render(request, 'cadastroConsumidor.html')


def companyRegister(request):
    return render(request, 'cadastroEmpresa.html')