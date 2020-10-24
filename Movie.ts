import {Professional} from "./Professional"
export class Movie{
    public title :  string;
    public releaseYear : number;
    public actors : Professional[];
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
    
    toString ():string
    {
        let prof: string = '';
        prof  =`Titulo :${this.title}
                Anio de lanzamiento :${this.releaseYear}
                Actores :${this.actors.toString()}                
                Nacionalidad :${this.nacionality}
                Director :${this.director.toString()}
                Guionista :${this.writer.toString()}
                Idioma :${this.language}
                Plataforma :${this.plataform}
                Pertenece al MCU :${this.isMCU}
                Nombre protagonista :${this.mainCharacterName}
                Productor :${this.producer.toString()}
                Distribuidora :${this.distributor}
                Genero :${this.genre}`
        return prof;
    }
    public mostrar()
    {
        console.log(this.toString())
    }
    
}