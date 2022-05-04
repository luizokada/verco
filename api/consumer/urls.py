from django.urls import path
from .views import ConsumersViewSet

# O MODULE DE CONSUMER FOI DESCONTINUADO, AGORA SEGUIMOS COM O MODULE USERAPP, QUE SEGUE O PADRAO REST PARA CRIAR USUARIOS

urlpatterns = [
    path('registro', ConsumersViewSet.as_view(), name="Registro"),
]
