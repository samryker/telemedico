from django.http  import HttpResponse,HttpResponseBadRequest
import os


def gitpull(request):

    a=os.system("git -C /var/www/telemedico/ pull origin main")
    a="Webhook working"
    os.system("touch /var/www/telemedico/medico/medico/wsgi.py")
    return HttpResponse(a, status=200)
