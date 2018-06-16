"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbsearch = require("../../../db/db.actions/db.search");
var Search = /** @class */ (function () {
    // api/search root
    function Search(router) {
        router.get('/', this.getRegions.bind(this));
        this.dbsearcher = new dbsearch.DBSearch();
    }
    Search.prototype.getRegions = function (req, res) {
        console.log('**** retreiving regions');
        this.dbsearcher.getRegions(function (err, data) {
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            else {
                console.log('YAY');
                res.status(200).send(data.rows);
            }
        });
    };
    //create a saved search
    Search.prototype.postSavedSearch = function (req, res) {
    };
    //return either one or all saved searches
    Search.prototype.getSavedSearches = function (req, res) {
    };
    //delete a saved search from database
    Search.prototype.deleteSavedSearch = function (req, res) {
    };
    //modify a saved search
    Search.prototype.modifySavedSearch = function (req, res) {
    };
    return Search;
}());
exports.default = Search;
//# sourceMappingURL=search.js.map