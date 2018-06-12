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
        if (!this.startFolder)
            this.startFolder = path.basename(folderName);
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
                var fullRoute = '../../../' + dirs.join('/');
                dirs.splice(0, 3);
                var router = express.Router();
                //Generate the route
                var baseRoute = '/' + dirs.join('/');
                //Load the JavaScript file ("controller") and pass the router to it
                var con = fullRoute + '/' + path.basename(file, '.js');
                var controllerClass = require('../controllers/api/search/search').default;
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