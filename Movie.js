"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    Movie.prototype.toString = function () {
        var prof = '';
        prof = "Titulo :" + this.title + "\n                Anio de lanzamiento :" + this.releaseYear + "\n                Actores :" + this.actors.toString() + "                \n                Nacionalidad :" + this.nacionality + "\n                Director :" + this.director.toString() + "\n                Guionista :" + this.writer.toString() + "\n                Idioma :" + this.language + "\n                Plataforma :" + this.plataform + "\n                Pertenece al MCU :" + this.isMCU + "\n                Nombre protagonista :" + this.mainCharacterName + "\n                Productor :" + this.producer.toString() + "\n                Distribuidora :" + this.distributor + "\n                Genero :" + this.genre;
        return prof;
    };
    Movie.prototype.mostrar = function () {
        console.log(this.toString());
    };
    return Movie;
}());
exports.Movie = Movie;
