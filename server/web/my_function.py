from bs4 import BeautifulSoup
from bs4.element import SoupStrainer
import requests


def my_scraping(mon_url,tag,number,adresse,class_adresse,d_class,name,link,description,class_desc): 
    i=0
    j=1
    database=dict()
    ma_list=[]
    while(j<number):
        mes_donnees=(phrase(mon_url,str(j)))
        j+=1
        company_name=''
        html_text=requests.get(mes_donnees).text
        #html_text=requests.get('https://www.optioncarriere.tn/emplois-tunisie-123097.html?p=1').text
        #html_text=requests.get('https://www.jobi.tn/#!/?q=page=9&sortBy=updated_at&sortOrder=desc').text
        #block_white_a post clearfix silver-job-block
        soup=BeautifulSoup(html_text,'lxml')
        jobs=soup.find_all(tag,class_=d_class)
        i=0
        #jobs=soup.find_all('article',class_="job clicky")
        #jobs=soup.find_all('div',class_="hpanel m-none m-b-xs joboffer-preview font-8 m-b-sm")
        for job in jobs:
            
#            company_link=job.header.p_class.a['href']
            company_link=job.find(link)['href']
            company_description=job.find(description,class_=class_desc).text
            company_name =job.find(name).text

#            company_addresse=job.find(adresse,'span12 no-margin-left').text
            company_addresse=job.find(adresse,class_=class_adresse).text
           
            
#            ma_list.append({'emploi':company_name.strip(),'adresse':company_addresse.strip(),'lien':company_link,
#                            'entreprise':company_entreprise.strip(),'description':company_description.strip(), 'temps':company_time})
#            ma_list.append({'emploi':company_name.strip(),'adresse':company_addresse.strip(),'lien':company_link,'description':company_description.strip(),'entreprise':company_entreprise.strip(),'time':company_time.strip()})
            ma_list.append({'emploi':company_name.strip(),'adresse':company_addresse.strip(),'lien':company_link,'description':company_description.strip()})

            
            #database.update(ma_list)
        
            #skills=job.find('span',class_='srp-skills').text.replace(' ','')
            #more_info=job.header.h2.a['href']
        #    published_date=job.find('span',class_='sim_posted').span.text
        #return ma_list"""
    return ma_list
 

def single_search(single,tag,tag_class,adresse,class_addresse,description, class_desc,link, name):
#def single_search(single,tag,tag_class,adresse,class_addresse,description, class_desc,link, name):
    ma_list=list()
    site="https://www.optioncarriere.tn/emploi-"+single+".html"
    html_text=requests.get(site).text
    soup=BeautifulSoup(html_text,'lxml')
    jobs=soup.find_all(tag,class_=tag_class)
    for job in jobs:
            
#            company_link=job.header.p_class.a['href']
        company_link=job.find(link)['href']
        company_description=job.find(description,class_=class_desc).text
        company_name =job.find(name).text
#            company_addresse=job.find(adresse,'span12 no-margin-left').text
        company_addresse=job.find(adresse,class_=class_addresse).text



            
        ma_list.append({'emploi':company_name.strip(),'adresse':company_addresse.strip(),'lien':company_link,'description':company_description})
    return ma_list

    if (len(ma_list)==0):
        return "Aucun resultat pour "+single
    else: 
        return ma_list
    

def Merge(dict1, dict2):
    return(dict2.update(dict1))
def phrase(a,b):
    return str(a)+(b)
def remove_space(a):
    return a.lstrip().rstrip()


def concat_list():
    #post1=my_scraping('https://www.keejob.com/offres-emploi/?page=','div',5,'div','block_white_a post clearfix silver-job-block','h6')
    post1=my_scraping('https://www.optioncarriere.tn/emplois-tunisie-123097.html?p=','article',5,'ul','location','job clicky','h2')
    concatenation=post1
    return concatenation
