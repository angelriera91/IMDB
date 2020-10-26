import {Professional} from "./Professional"
import {Movie} from "./Movie"
const fs = require('fs');

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


   wirteJson(archivo:string){
    let basededatos = JSON.stringify(this.peliculas)
    fs.writeFileSync(archivo, basededatos, function (err) {
      if (err) throw err;
      console.log('Saved!');
    })
   }

   readJson(archivo: string): IMDB{
            let pipo = fs.readFileSync(archivo)             
            let IMBDdatos:IMDB = JSON.parse(pipo);
            return IMBDdatos;
           console.log(IMBDdatos);
           console.log("Readed!");
       

   }   
}

