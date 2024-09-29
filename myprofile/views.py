from django.shortcuts import render,redirect
from django.contrib import messages
from .models import contact

#Create your views here.
def home(request):
     return render(request,'home.html')
# def about(request):
#      return render(request,'about.html')
# def services(request):
#      return render(request,'services.html')
# def project(request):
#      return render(request,'project.html')


def contacts(request):
     if request.method=="POST":
        fname=request.POST.get("name")
        femail=request.POST.get("email")
        fphone_number=request.POST.get("number")
        fdescription=request.POST.get("desc")
        
        print("data is comming")
        print(fname,femail,fphone_number,fdescription)
        query=contact(name=fname,email=femail,phone_number=fphone_number,description=fdescription) 
        query.save()
        messages.success(request, 'Thanks for contacting us. We will get back to you soon.')
        return redirect('#contact')

     return render(request, 'contact.html')

    


        
