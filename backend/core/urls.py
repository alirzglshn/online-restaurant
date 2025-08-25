from django.urls import path 
from core import views 

urlpatterns = [
    path('', views.getRoutes, name="getRoutes"),
    path('products/', views.getProducts, name="getProducts"),
    path('product/<str:pk>/', views.getProduct, name="getProduct"),
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/profile/', views.getUserProfile, name="getUserProfiles"),
    path('users/', views.getUsers, name="getUsers"),
    path('users/register/', views.registerUser, name="register"),
]
