CREATE TABLE users (
	id serial NOT NULL,
	firstname text NOT NULL,
	lastname text NOT NULL,
	city text NULL,
	address text NULL,
	CONSTRAINT users_pkey PRIMARY KEY (id)
)
WITH (
	OIDS=FALSE
) ;

INSERT INTO users (id,firstname,lastname,city,address) VALUES 
(1,'Martha','Mora','Gilbert','4962 Coplin Avenue')
,(2,'John C','Hill','Beaverton','928 Coburn Hollow Road')
,(3,'Bessy','Gonzales','Laredo','2940 Honeysuckle Lane')
,(4,'Mark','Umstead','Albuquerque','3053 Byrd Lane')
,(5,'Genji','Hao','Hyattsville','2045 Cost Avenue')
;



