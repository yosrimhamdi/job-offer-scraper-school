from django.conf.urls import url
from . import views
urlpatterns = [
    url(r"^$",views.index),
    url(r'^tri',views.listing),
    url(r'^job/(?P<job_id>[0-9]+)/$',views.detail),
    url(r'^search/$',views.search)
]
