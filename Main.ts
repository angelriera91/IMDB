import { Movie } from "./Movie"
import {Professional} from "./Professional"

let actor1 = new Professional('Robert Downey Jr.',55,'Hombre',73,164,'Castaño','Marron','Blanco',false,'Estadounidense',0,'Actor')
let actor2 = new Professional('Samuel L. Jackson',71,'Hombre',91,189,'Calvo','Marron','Negro',false,'Estadounidense',1,'Actor')
let director = new Professional('Jon favreau',54,'Hombre',96,176,'Moreno','Marron','Blanco',false,'Estadounidense',0,'Director')
let guionista = new Professional('Justin theroux',49,'Hombre',54,171,'Negro','Verdes','Blanco',false,'Estadounidense',0,'Guionista')
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

//actor1.mostrarTodo();
//actor2.mostrarTodo();
//director.mostrarTodo();
//guionista.mostrarTodo();
//productor.mostrarTodo();

pelicula1.mostrar();