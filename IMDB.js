"use strict";
exports.__esModule = true;
exports.IMDB = void 0;
var fs = require('fs');
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
    IMDB.prototype.wirteJson = function (archivo) {
        var basededatos = JSON.stringify(this.peliculas);
        fs.writeFileSync(archivo, basededatos, function (err) {
            if (err)
                throw err;
            console.log('Saved!');
        });
    };
    IMDB.prototype.readJson = function (archivo) {
        var pipo = fs.readFileSync(archivo);
        var IMBDdatos = JSON.parse(pipo);
        return IMBDdatos;
        console.log(IMBDdatos);
        console.log("Readed!");
    };
    return IMDB;
}());
exports.IMDB = IMDB;
