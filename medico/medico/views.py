from django.http  import HttpResponse,HttpResponseBadRequest
import os


def gitpull(request):

    a=os.system("git -C /home/ubuntu/telemedico/ pull origin main")
    os.system("touch /home/ubuntu/telemedico/medico/medico/wsgi.py")
    return HttpResponse(a, status=200)
