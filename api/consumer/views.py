from django.shortcuts import render
from rest_framework import viewsets
from .models import Consumer
from .serializers import ConsumerSerializer


class ConsumersViewSet(viewsets.ModelViewSet):
    queryset = Consumer.objects.all().order_by('name')
    serializer_class = ConsumerSerializer
