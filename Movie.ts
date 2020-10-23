import {Professional} from "./Professional"
export class Movie{
    public title :  string;
    public releaseYear : number;
    public actors : Professional;
    public nacionality :  string;
    public director : Professional;
    public writer : Professional;
    public language : string;
    public plataform : string;
    public isMCU : boolean;
    public mainCharacterName : string;
    public producer : Professional ;
    public distributor : string ;
    public genre : string;

    constructor( title: string, releaseYear: number, nacionality: string, genre : string)
    {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    
    public toString ():string
    {
        let texto
        return texto = "Titulo :"+this.title +"\nAnio de lanzamiento : "+ this.releaseYear+"\n"+this.actors.toString()+"\n"+"Nacionalidad :"+ this.nacionality+ this.director.toString()+this.writer.toString()+"Idioma :"+this.language + "\nPlataforma :"+this.plataform +"\nPertenece al MCU :"+this.isMCU + "\nnombre protagonista :"+ this.mainCharacterName +"\nProductor :"+this.producer.toString() +"Distribuidora :"+this.distributor + "\mGenero :" +this.genre
    }
    public mostrar()
    {
        console.log(this.toString())
    }
    
}