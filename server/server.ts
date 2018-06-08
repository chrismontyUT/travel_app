import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as db from './db/index';
import * as fs from 'fs'


class App {

        public express: express.Application;

        constructor(){
            this.express = express();
            this.middleware();
            this.routes();  
        }

        private middleware(): void {
            this.express.use(logger('dev'));
            this.express.use(bodyParser.json());
            this.express.use(bodyParser.urlencoded({ extended: false }));
        }

        private routes(): void {
            let router = express.Router();
            // placeholder route handler
            router.get('/', (req, res, next) => {
              
            db.query('SELECT * FROM world.region limit $1', [100] , function(err,result) {
                    if(err){
                        console.log(err);
                        res.status(400).send(err);
                    }
                    res.status(200).send(result);
                }); 
            });
            this.express.use('/', router);
        }

}


/*
   

});

*/


export default new App().express;
