#!/usr/bin/env python3



import json

with open('db2.json','r') as f:
	db=json.load(f)

from movies.models import Movie
from movies.models import Rating


for i in db:

	try:
		movie=Movie.objects.create(title=i['title'],
			 year        = i['year'],
			 rated       = i['rated'],
			 released    = i['released'],
			 runtime     = i['runtime'],
			 genre       = i['genre'],   
		 	 director    = i['director'],  
		 	 writer      = i['writer'],   
		 	 actors      = i['actors'],   
		 	 plot        = i['plot'],   
		 	 country     = i['country'],   
		 	 language    = i['language'],   
		 	 awards      = i['awards'],   
		 	 poster      = i['poster'],   
		 	 metascore   = i['metascore'],   
			 imdbvotes   = i['imdbvotes'],   
		 	 imdbid      = i['imdbid'],   
		 	 type        = i['type'],
		 	 dvd         = i['dvd'],
		 	 boxoffice   = i['boxoffice'],
		 	 production  = i['production'],
		 	 website     = i['website'],
		)
	except KeyError:
		pass

	try:
		for j in i['ratings']:
			Rating.objects.create(movie=movie,
				source	=	j['source'],
				value   =	j['value']
			)

	except KeyError:
		pass


