import json
from bs4 import element
from django.http.response import JsonResponse
from django.shortcuts import render
from django.http import HttpResponse
from requests.api import post
from . import my_function

"""
def index(request):
    print(type(my_function.concat_list()))
    return render(request, 'web/index.html', context={'data':my_function.concat_list()})

"""
def index(request):
    return HttpResponse(json.dumps(my_function.concat_list()), content_type = "application/json")
def listing(request):
    recherche=['<li>{}<li/>'.format(ma_list['emploi']) for ma_list in my_function.concat_list()]
    message="""<ul>{}</ul>""".format("\n".join(recherche))
    return HttpResponse(message)

def detail(request, job_id):
    id=int(job_id)
    job=my_function.concat_list()[id]
    
#    tableau=my_function.concat_list()
#    job=tableau[3]
    return HttpResponse(json.dumps(job))
def search(request):
    
    mot_trouve=list()
    obj=str(request.GET)
    requete=request.GET.get('query')
    
    if not requete:
        message="Erreur Methode GET"
    else:
        job=my_function.single_search(requete,"article",'job clicky','ul','location','div','desc','a','h2','ul','salary','p','company')
        
    return HttpResponse(json.dumps(job))