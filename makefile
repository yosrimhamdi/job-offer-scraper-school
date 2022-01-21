git:
	git add .
	git commit -m"$m"
	git push origin master

heroku:
	git push heroku master

both:
	$(MAKE) git
	$(MAKE) heroku

pull:
	git pull origin master