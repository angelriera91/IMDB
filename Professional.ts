export class Professional{

    public name: string;
    public age: number;
    public genre: string;
    public weight: number;
    public height: number;
    public hairColor: string;
    public eyeColor: string;
    public race: string;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;

    constructor(name:string,age:number,genre:string, weight: number, height:number,hairColor:string, eyeColor:string, race:string, isRetired:boolean,nationality:string,
                oscarNumber:number,profession:string){

                    this.name = name;
                    this.age = age;
                    this.genre = genre;
                    this.weight = weight;
                    this.height = height;
                    this.hairColor = hairColor;
                    this.eyeColor = eyeColor;
                    this.race = race;
                    this.isRetired = isRetired;
                    this.nationality = nationality;
                    this.oscarsNumber = oscarNumber;
                    this.profession = profession;

    }

    mostrarTodo(){

        let prof: string = ''
        let status: String;

        if(this.isRetired == true){
            status = 'Si, esta viviendo la vida'
        }
        else{
            status='No, sigue en activo'
        }


        prof += `
                Nombre: ${this.name},
                Edad: ${this.age},
                genero: ${this.genre},
                peso: ${this.weight} kg,
                altura: ${this.height} cm,
                Color de pelo: ${this.hairColor},
                Color de ojos: ${this.eyeColor},
                Raza: ${this.race},
                ¿Esta Retirado?: ${status},
                Nacionalidad: ${this.nationality},
                Numero de Oscars: ${this.oscarsNumber},
                Profesion: ${this.profession}\n `

        console.log(prof)

    }


}

