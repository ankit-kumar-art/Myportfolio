from django.urls import path
from myprofile import views

urlpatterns = [
    path('',views.home,name='home'),
    # path('about/', views.about, name='about'),
    # path('#contact', views.contacts, name='contacts'),
    # path('project/', views.project, name='project'),
    # path('services/', views.services, name='services'),
    
]