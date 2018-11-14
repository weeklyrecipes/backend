all:
	tsc
	cp ./src/helpers/ingredients.json ./build/helpers/ingredients.json
	git commit -am "Update"
	git push heroku master

