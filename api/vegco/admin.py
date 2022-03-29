from django.contrib import admin
from vegco.models import Endereco

class Endereco(admin.ModelAdmin):
    list_display = ('id', 'rua', 'numero')
    list_display_links = ('id', 'rua')
    search_fields = ('rua')