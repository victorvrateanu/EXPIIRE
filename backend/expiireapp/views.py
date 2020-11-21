from django.shortcuts import render

# Create your views here.
from rest_framework.viewsets import ModelViewSet

from expiireapp.models import Product
from expiireapp.serializers import ProductSerializer


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()

    serializer_class = ProductSerializer

