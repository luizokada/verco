from rest_framework import viewsets

from .models import Consumer
from .serializers import ConsumerSerializer

# O MODULE DE CONSUMER FOI DESCONTINUADO, AGORA SEGUIMOS COM O MODULE USERAPP, QUE SEGUE O PADRAO REST PARA CRIAR USUARIOS

class ConsumersViewSet(viewsets.ModelViewSet):
    queryset = Consumer.objects.all().order_by('name')
    serializer_class = ConsumerSerializer


