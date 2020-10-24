"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarNumber, profession) {
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
    Professional.prototype.toString = function () {
        var prof = '';
        var status;
        if (this.isRetired == true) {
            status = 'Si, esta viviendo la vida';
        }
        else {
            status = 'No, sigue en activo';
        }
        prof += "\n                Nombre: " + this.name + ",\n                Edad: " + this.age + ",\n                genero: " + this.genre + ",\n                peso: " + this.weight + " kg,\n                altura: " + this.height + " cm,\n                Color de pelo: " + this.hairColor + ",\n                Color de ojos: " + this.eyeColor + ",\n                Raza: " + this.race + ",\n                \u00BFEsta Retirado?: " + status + ",\n                Nacionalidad: " + this.nationality + ",\n                Numero de Oscars: " + this.oscarsNumber + ",\n                Profesion: " + this.profession + "\n ";
        return prof;
    };
    Professional.prototype.mostrarTodo = function () {
        console.log(this.toString());
    };
    return Professional;
}());
exports.Professional = Professional;
