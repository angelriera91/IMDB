import { Movie } from "./Movie"
import {Professional} from "./Professional"
import {IMDB} from "./IMDB"
const fs = require('fs');
 

let actor1 = new Professional('Robert Downey Jr.',55,'Hombre',73,164,'Castaño','Marron','Blanco',false,'Estadounidense',0,'Actor')
let actor2 = new Professional('Samuel L. Jackson',71,'Hombre',91,189,'Calvo','Marron','Negro',false,'Estadounidense',1,'Actor')
let director = new Professional('Jon Favreau',54,'Hombre',96,176,'Moreno','Marron','Blanco',false,'Estadounidense',0,'Director')
let guionista = new Professional('Justin Theroux',49,'Hombre',54,171,'Negro','Verdes','Blanco',false,'Estadounidense',0,'Guionista')
let productor = new Professional('Kevin Feige',47,'Hombre',92,180,'Moreno','Azul','Blanco',false,'Estadounidense',0,'Productor')

let pelicula1 = new Movie('Iron Man 2',2010,"America","Accion Superheroes",)
pelicula1.actors = [actor1,actor2];
pelicula1.director = director;
pelicula1.writer = guionista;
pelicula1.language = "Multilanguage";
pelicula1.plataform = "Disney Plus";
pelicula1.isMCU = true;
pelicula1.mainCharacterName = "Iron Man";
pelicula1.producer = productor;
pelicula1.distributor = "Paramount Pictures";

let actor11 = new Professional('Matthew McConaughey',50,'Hombre',77,182,'Castaño','Marron','Blanco',false,'Estadounidense',1,'Actor')
let actor22 = new Professional('Anne Hathaway',37,'Mujer',56,170,'Castano','Marron','Blanca',false,'Estadounidense',1,'Actriz')
let director2 = new Professional('Christopher Nolan',50,'Hombre',96,176,'Moreno','Marron','Blanco',false,'Britanico',0,'Director')
let guionista2 = new Professional('Jonathan Nolan',44,'Hombre',54,180,'Negro','Azules','Blanco',false,'Britanico',0,'Guionista')
let productor2 = new Professional('Emma Thomas',48,'Mujer',70,168,'Moreno','Marron','Blanca',false,'Britanica',0,'Productora')

let pelicula2 = new Movie('Interstellar',2014,"America","Ciencia Ficcion",)
pelicula2.actors = [actor11,actor22];
pelicula2.director = director2;
pelicula2.writer = guionista2;
pelicula2.language = "Multilanguage";
pelicula2.plataform = "Netflix";
pelicula2.isMCU = false;
pelicula2.mainCharacterName = "Joseph Cooper";
pelicula2.producer = productor2;
pelicula2.distributor = "Paramount Pictures";

//actor1.mostrarTodo();
//actor2.mostrarTodo();
//director.mostrarTodo();
//guionista.mostrarTodo();
//productor.mostrarTodo();

//pelicula1.mostrar();
 let bdd = new IMDB([pelicula1,pelicula2]);
 let archivo = "imdbBBDD.json"

 bdd.mostrarTodo();

bdd.wirteJson(archivo)

let bdd2 = new IMDB([])
console.log(bdd2.readJson(archivo))

