from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['POST'])
def first(request):
    return Response({'message': "we received you request"})

