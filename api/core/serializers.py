from rest_framework import serializers

from .models import Product, Consumer


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'value', 'slug')


class ConsumerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Consumer
        fields = ('id', 'name', 'email', 'password', 'address', 'clickedAds')