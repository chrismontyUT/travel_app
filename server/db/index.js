const { Pool } = require('pg');
require('dotenv').config();
 
// postgres connection config
const config = {
    host: process.env.DBHOST,
    // Do not hard code your username and password.
    // Consider using Node environment variables.
    user: process.env.DBUSERNAME,     
    password: process.env.DBPASSWORD,
    database: 'atlas',
    port: 5432,
    ssl: true
  };

const pool = new Pool(config);

pool.connect(function(err,client,done) {
    if(err){
        console.log("not able to get connection "+ err);
    }
});



module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}