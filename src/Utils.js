"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var constants_1 = require("./constants");
var Debouncer = /** @class */ (function () {
    function Debouncer() {
    }
    /**
     * FELADAT!
     * Hozd létre a statikus bound metódust.
     * @param num {number}
     * @param min {number}
     * @param max {number}
     * @returns {number} - válaszd ki a kisebbet a num és a max közül
     * majd válaszd ki a nagyobbat az előbbi érték és a min közül.
     */
    Debouncer.debounce = function (fun, wait) {
        var id;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            clearTimeout(id);
            id = setTimeout(function () { return fun.apply(void 0, args); }, wait);
        };
    };
    return Debouncer;
}());
var Utils = /** @class */ (function (_super) {
    __extends(Utils, _super);
    function Utils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Utils.rand = function (min, max, reduce) {
        if (reduce === void 0) { reduce = constants_1.SIZE; }
        var num = Math.floor(Math.random() * (max - min)) + min;
        return num - (num % reduce);
    };
    Utils.snap = function (num, point) {
        if (point === void 0) { point = constants_1.SIZE; }
        var bottom = num - (num % point);
        var top = bottom + point;
        return num - bottom <= top - num ? bottom : top;
    };
    return Utils;
}(Debouncer));
exports["default"] = Utils;
