from django.http import HttpResponse
from django.template import loader

#Home page path

def homepage (request): 
    template = loader.get_template('myfirst.html')
    return HttpResponse(template.render())


# Create your views here.
