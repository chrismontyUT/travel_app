const { Pool } = require('pg')

// postgres connection config
const config = {
    user: 'postgres',
    database: 'atlas',
    password: 'postgres',
    port: 5432
  };

const pool = new Pool(config);

pool.connect(function(err,client,done) {
    if(err){
        console.log("not able to get connection "+ err);
        res.status(400).send(err);
    }
});



module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}