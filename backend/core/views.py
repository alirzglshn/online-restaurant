from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response 
from rest_framework.decorators import api_view 
from .models import Products 
from .serializers import ProductsSerializer


# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    return Response('hello world!')

@api_view(['GET'])
def getProducts(request):
    products=Products.objects.all()
    serializer=ProductsSerializer(products,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request,pk):
    product=Products.objects.get(_id=pk)
    serializer=ProductsSerializer(product,many=False)
    return Response(serializer.data)