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
        var prof;
        prof = "Titulo :" + this.title + "Anio de lanzamiento :" + this.releaseYear + this.actors[0].toString() + "\n" + "Nacionalidad :" + this.nacionality + "\n" + "Director :" + this.director.toString() + "Guionista :" + this.writer.toString() + "Idioma :" + this.language + "\nPlataforma :" + this.plataform + "\nPertenece al MCU :" + this.isMCU + "\nnombre protagonista :" + this.mainCharacterName + "\nProductor :" + this.producer.toString() + "Distribuidora :" + this.distributor + "\mGenero :" + this.genre;
        return prof;
    };
    Movie.prototype.mostrar = function () {
        console.log(this.toString());
    };
    return Movie;
}());
exports.Movie = Movie;
