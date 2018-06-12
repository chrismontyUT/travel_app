"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const { Pool } = require('pg');
var pg = require("pg");
var dotenv = require("dotenv");
dotenv.config();
// postgres connection config
var config = {
    host: process.env.DBHOST,
    // Do not hard code your username and password.
    // Consider using Node environment variables.
    user: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,
    database: 'atlas',
    port: 5432,
    ssl: true
};
var Database = /** @class */ (function () {
    function Database() {
        this.pool = new pg.Pool(config);
    }
    Database.prototype.open = function () {
        this.pool.connect(function (err, client, done) {
            if (err) {
                console.log("not able to get connection " + err);
            }
            ;
        });
    };
    Database.prototype.query = function (text, params, callback) {
        return this.pool.query(text, params, callback);
    };
    return Database;
}());
var DB = new Database();
exports.default = DB;
//# sourceMappingURL=index.js.map