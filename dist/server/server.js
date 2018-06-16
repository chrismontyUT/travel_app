"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var db = require("./db/index");
var router_1 = require("./routes/router");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.db = new db.Database();
        this.middleware();
        this.routes();
        this.database();
    }
    App.prototype.middleware = function () {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    App.prototype.database = function () {
        this.db.open();
    };
    App.prototype.routes = function () {
        router_1.default.load(this.express, 'dist/server/controllers');
        var router = express.Router();
        // placeholder route handler
        router.get('/', function (req, res, next) {
            res.send('Welcome Home!!');
        });
        this.express.use('/', router);
    };
    return App;
}());
var myApp = new App();
exports.default = myApp;
//# sourceMappingURL=server.js.map