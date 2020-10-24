"use strict";
exports.__esModule = true;
exports.IMDB = void 0;
var IMDB = /** @class */ (function () {
    function IMDB(peliculas) {
        this.peliculas = peliculas;
    }
    IMDB.prototype.toString = function () {
        var texto;
        for (var i = 0; i < this.peliculas.length; i++) {
            texto += this.peliculas[i].toString();
        }
        return texto;
    };
    IMDB.prototype.mostrarTodo = function () {
        console.log(this.toString());
    };
    return IMDB;
}());
exports.IMDB = IMDB;
