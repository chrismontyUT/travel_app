import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
//import * as db from './db/index';
import * as fs from 'fs';
import Router from './routes/router';
//import


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
			Router.load( this.express, 'dist/server/controllers')


			let router = express.Router();
            // placeholder route handler
            router.get('/', (req, res, next) => {

				res.send('Welcome Home!!')
            });
			this.express.use('/', router);

        }

}



export default new App().express;
