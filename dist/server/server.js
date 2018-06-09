"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var db = require("./db/index");
//import Router from './routes/router'
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    App.prototype.middleware = function () {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    App.prototype.routes = function () {
        //Router.load( this.express, './controllers')
        var router = express.Router();
        // placeholder route handler
        router.get('/', function (req, res, next) {
            db.query('SELECT * FROM world.region limit $1', [100], function (err, result) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                res.status(200).send(result);
            });
        });
        this.express.use('/', router);
    };
    return App;
}());
exports.default = new App().express;
//# sourceMappingURL=server.js.map