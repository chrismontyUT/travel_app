"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var express = require("express");
var Router = /** @class */ (function () {
    function Router() {
        this.startFolder = null;
    }
    Router.prototype.load = function (app, folderName) {
        var _this = this;
        fs.readdirSync(folderName).forEach(function (file) {
            var fullName = path.join(folderName, file);
            var stat = fs.lstatSync(fullName);
            if (stat.isDirectory()) {
                //Recursively walk-through folders
                _this.load(app, fullName);
            }
            else if (file.toLowerCase().indexOf('.js')) {
                //Grab path to JavaScript file and use it to construct the route
                var dirs = path.dirname(fullName).split(path.sep);
                if (dirs[0].toLowerCase() === _this.startFolder.toLowerCase()) {
                    dirs.splice(0, 1);
                }
                var router = express.Router();
                //Generate the route
                var baseRoute = '/' + dirs.join('/');
                console.log('Created route: ' + baseRoute + ' for ' + fullName);
                //Load the JavaScript file ("controller") and pass the router to it
                var controllerClass = require('../' + fullName);
                var controller = new controllerClass(router);
                //Associate the route with the router
                app.use(baseRoute, router);
            }
        });
    };
    return Router;
}());
exports.default = new Router();
//# sourceMappingURL=router.js.map