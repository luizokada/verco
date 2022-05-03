from django.urls import path
from .views import ConsumersViewSet


urlpatterns = [
    path('registro', ConsumersViewSet.as_view(), name="Registro"),
]
