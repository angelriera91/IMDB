import {Professional} from "./Professional"
import {Movie} from "./Movie"
export class IMDB{
   public peliculas : Movie[] ;

   constructor (peliculas : Movie []){
    this.peliculas = peliculas;
   }
   toString():string
   {
       let texto : string;
       for (let i = 0; i < this.peliculas.length; i++)
       {
           texto += this.peliculas[i].toString();
       }
       return texto;
   }
   mostrarTodo()
   {
       console.log(this.toString())
   } 

   
}

