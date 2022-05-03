from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework import urls


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', urls),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('', include('core.urls')),
    # path('', include('consumer.urls')),
]
