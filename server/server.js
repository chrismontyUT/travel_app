const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const pg = require('pg');
const db = require('./db/index');
const fs = require('fs'); 
//const map = require('./map/map_view.html')

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/' , function(req , res , next){
   


 db.query('SELECT * FROM world.region limit 100', function(err,result) {
        if(err){
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    }); 

});


module.exports = app;
