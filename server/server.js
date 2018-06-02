const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const pg = require('pg');
//const db = require('./db/index');
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
   
    fs.readFile('./map/map_display.html' ,function(error, data){
        if (error) {
          res.writeHead(404);
          res.write('Contents you are looking for-not found');
          res.end();
        }  else {
          res.writeHead(200, {
            'Content-Type': 'text/html'
          });
          res.write(data.toString());
          res.end();
        
        }});

    /* db.query('SELECT * FROM public.coast where coast_gid = $1', [1],function(err,result) {
        if(err){
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    }); */

});

module.exports = app;
