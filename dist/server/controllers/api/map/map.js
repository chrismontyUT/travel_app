"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Map = /** @class */ (function () {
    function Map(router) {
        router.get('/', this.print.bind(this));
    }
    Map.prototype.print = function () {
        console.log('hiiiiii');
        this.loadTopojson();
    };
    Map.prototype.loadTopojson = function () {
        this.data = require('../../../countries.topojson');
    };
    Map.prototype.serveTopojson = function () {
    };
    return Map;
}());
exports.default = Map;
//# sourceMappingURL=map.js.map