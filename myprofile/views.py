from django.shortcuts import render, redirect
from django.contrib import messages
from django.urls import reverse
from django.core.mail import send_mail
from django.conf import settings
from .models import contact


def home(request):
    return render(request, 'home.html')


def about(request):
    return render(request, 'about.html')


def skills(request):
    return render(request, 'skills.html')


def projects(request):
    return render(request, 'projects.html')


def contacts(request):
    if request.method == "POST":
        fname = request.POST.get("name")
        femail = request.POST.get("email")
        fphone_number = request.POST.get("number")
        fdescription = request.POST.get("desc")

        # 1) Save to database (as before)
        query = contact(name=fname, email=femail, phone_number=fphone_number, description=fdescription)
        query.save()

        # 2) Email notification to the portfolio owner
        if settings.EMAIL_HOST_USER and settings.EMAIL_HOST_PASSWORD:
            try:
                send_mail(
                    subject=f"New portfolio contact message from {fname}",
                    message=(
                        f"Name: {fname}\n"
                        f"Email: {femail}\n"
                        f"Phone: {fphone_number}\n\n"
                        f"Message:\n{fdescription}"
                    ),
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.CONTACT_NOTIFY_EMAIL],
                    fail_silently=True,
                )
            except Exception:
                # Never let an email failure break the form submission for the visitor
                pass

        messages.success(request, 'Thanks for contacting us. We will get back to you soon.')
        return redirect(reverse('contact'))

    return render(request, 'contact.html')
