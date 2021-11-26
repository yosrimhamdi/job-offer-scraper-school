from django.shortcuts import render
from django.http import HttpResponse
from . import my_function
def index(request):
    post=my_function.concat_list()
    return HttpResponse(post)
# Create your views here.
