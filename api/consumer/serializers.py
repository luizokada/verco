from rest_framework import serializers

from .models import Consumer


class ConsumerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Consumer
        fields = ('id', 'name', 'email', 'password', 'address', 'clickedAds')
        extra_kwargs = {'password': {'write_only': True}}

