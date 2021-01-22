"use strict";
exports.__esModule = true;
var Piece_1 = require("./Piece");
var constants_1 = require("./constants");
var Level = /** @class */ (function () {
    function Level(generatorFunction) {
        this.generatorFunction = generatorFunction;
        this.pieces = [];
        this.generatorFunction = generatorFunction;
        this.garden = document.getElementById('garden');
    }
    /**
     * FELADAT!
     * Hozz létre egy metódust translate néven!
     * Visszatérési érték: mind a két kapott paramétert kerekítsd lefelé,
     * majd szorozd meg egyenként a SIZE konstanssal.
     * @param x {number} - x koordináta
     * @param y {number} - y koordináta
     * @returns {coord} - egy [x, y] koordinátával tér vissza
     */
    Level.prototype.translate = function (x, y) {
        var xr = Math.floor(x) * constants_1.SIZE;
        var yr = Math.floor(y) * constants_1.SIZE;
        return [xr, yr];
    };
    Level.prototype.remove = function () {
        this.pieces.forEach(function (piece) {
            piece.remove();
        });
    };
    Level.prototype.line = function (x0, y0, x1, y1) {
        var dx = Math.abs(x1 - x0);
        var dy = Math.abs(y1 - y0);
        var sx = (x0 < x1) ? 1 : -1;
        var sy = (y0 < y1) ? 1 : -1;
        var err = dx - dy;
        // eslint-disable-next-line no-constant-condition
        while (true) {
            var _a = this.translate(x0, y0), tx0 = _a[0], ty0 = _a[1];
            this.pieces.push(new Piece_1["default"]({ x: tx0, y: ty0, type: 'wall' }));
            // break when line is done
            if (Math.abs(x0 - x1) <= 0.5 && Math.abs(y0 - y1) <= 0.5)
                break;
            var e2 = 2 * err;
            if (e2 > -dy) {
                err -= dy;
                x0 += sx;
            }
            if (e2 < dx) {
                err += dx;
                y0 += sy;
            }
        }
    };
    /**
     * render method
     * @returns {void}
     */
    Level.prototype.render = function () {
        var _this = this;
        /**
         * FELADAT!
         * @var {number} cols - this.garden.clientHeight és SIZE hányadosa,
         * lefelé kerekítve
         */
        var cols = Math.floor(this.garden.clientHeight / constants_1.SIZE);
        /**
         * FELADAT!
         * @var {number} rows - this.garden.clientWidth és SIZE hányadosa,
         * lefelé kerekítve
         */
        var rows = Math.floor(this.garden.clientWidth / constants_1.SIZE);
        /**
         * FELADAT!
         * @var {LevelMap} level - this.generatorFunction által visszaadott érték,
         * a rows és cols paraméterekkel
         */
        var level = this.generatorFunction(cols, rows);
        level.forEach(function (line) {
            var _a = line[0], x0 = _a[0], y0 = _a[1];
            var _b = line[1], x1 = _b[0], y1 = _b[1];
            _this.line(x0, y0, x1, y1);
            /**
             * FELADAT!
             * Olvasd ki a fenti sorhoz hasonlóan az x1 és y1 koodrinátákat is,
             * a line második eleméből!
             */
            /**
             * FELADAT!
             * Hívd meg a this.line metódust és add neki át az x0, y0, x1, y1
             * értékeket.
             */
        });
    };
    return Level;
}());
exports["default"] = Level;
