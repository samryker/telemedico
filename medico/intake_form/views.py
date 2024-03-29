from django.shortcuts import render
from django import forms
from medico.settings import EMAIL_HOST_USER
from .forms import PatientIntakeForm
from .models import *
from django.http  import HttpResponse,HttpResponseBadRequest
import json 
from django.core.mail import send_mail
from django.conf import settings
from .serializers import *
from rest_framework.views import APIView
from .ack_gen import main

# Create your views here.CorsMiddleware

# def intake_form(request):
#     if request.method == 'POST':
#         intake = PatientIntakeForm(request.POST)
#         if intake.is_valid():
#             intake.save()
#             data = intake.cleaned_data
#             datastr=""
#             for key, value in data.items():
#                 datastr = datastr+ key+": "+str(value)+", \n"
#             subject = "MediPocket Consultation"
#             message = f'A new intake form has been added.Kindly check payment gateway to confirm timings to doctor.\n{datastr}'
#             email_from = settings.EMAIL_HOST_USER
#             recipient_list = ["priyanka@mymedipocket.com","samryker@gmail.com"]
#             try:
#                 send_mail(subject, message, email_from, recipient_list,fail_silently=True )
#             except:
#                 pass
#                 # return HttpResponse('Invalid header found.')
#             return HttpResponse('success')
#         return HttpResponse(str(intake.errors))
#     else:
#         form = PatientIntakeForm()
#         text = f'hi<br><form method="POST" action = ""><table>{form}</table><br><button type="Submit">Submit</button></form>'
#         return HttpResponse(text)


class Entry(APIView):



    def post(self, request):
        """API to create new intake form
        Arguements: request{[type]}----[description]
        Returns : [type] -- [description]
        """

        data = request.data
        assert isinstance(data, dict)
        datastr=""
        for key, value in data.items():
            datastr = datastr+ key+": "+str(value)+", \n"


        enquiry_serializer = PatientHealthInfoSerializer(data=data)

        if not enquiry_serializer.is_valid():
            return HttpResponse("Enquiry creation failed - " + str(enquiry_serializer.errors),status=400)

        enquiry_serializer.save()
        subject = "MediPocket IntakeForm Initiated"
        message = f'A new intake form has been added.Kindly check payment gateway to confirm timings to doctor.\n{datastr}'
        email_from = settings.EMAIL_HOST_USER
        recipient_list = ["priyanka@mymedipocket.com","samryker@gmail.com"]
        try:
            send_mail(subject, message, email_from, recipient_list,fail_silently=True )
        except:
            pass
            # return HttpResponse('Invalid header found.')
        return HttpResponse('success post')

    def get(self, request):
        return HttpResponse('success get')
