import json
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
        continuer=True
        mot=''
        k=len(str(requete))
        y=0
        i=0
        ma_list=list()
        addresse=list()
        for job_list in my_function.concat_list():
            ma_list.append((job_list['emploi']))
            addresse.append((job_list['adresse']))
#        message=my_function.concat_list().objects.filter(string__contains=requete)        
#         message=requete.objects.filter(pk__in=my_function.concat_list())
        #message=my_function.concat_list().get(addresse="Tunis")
        while(continuer):
            while(i<len(ma_list[y])):
                chaine=ma_list[y]
                mot=mot+chaine[i:k]
                if(len(mot)==len(requete)):
                    if(mot.upper()==requete.upper()):
                        mot_trouve.append({'emploi':ma_list[y].strip(),'adresse':addresse[y].strip()})
                        y+=1                   
                i+=1
                k+=1
                mot=''
        
            y+=1
            i=0
            k=len(str(requete))
            if(y==len(ma_list)):
                continuer=False

    return HttpResponse(json.dumps(mot_trouve))