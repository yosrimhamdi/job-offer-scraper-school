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