"use strict";
exports.__esModule = true;
var Locations;
(function (Locations) {
    var data = new Map(); // { [location: string]: boolean } = {};
    Locations.set = function (x, y, value) {
        if (value === void 0) { value = true; }
        data.set(x + ":" + y, value);
    };
    Locations.remove = function (x, y) {
        data["delete"](x + ":" + y);
    };
    Locations.has = function (x, y) {
        return data.has(x + ":" + y);
    };
    Locations.get = function (x, y) {
        return data.get(x + ":" + y);
    };
    Locations.getAll = function () { return data; };
})(Locations || (Locations = {}));
exports["default"] = Locations;
