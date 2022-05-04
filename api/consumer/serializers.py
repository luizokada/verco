from rest_framework import serializers

from .models import Consumer

# O MODULE DE CONSUMER FOI DESCONTINUADO, AGORA SEGUIMOS COM O MODULE USERAPP, QUE SEGUE O PADRAO REST PARA CRIAR USUARIOS

class ConsumerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Consumer
        fields = ('id', 'name', 'cpf', 'email', 'address', 'clickedAds')


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consumer
        fields = ('id', 'name', 'cpf', 'address', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        consumer = Consumer.objects.create_user(
            validated_data['name'], validated_data['cpf'], validated_data['email'], validated_data['password'])

        return consumer
