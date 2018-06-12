import dbase from '../index';


export class DBSearch{



	public getRegions(callback){
		console.log('querying database for regions');
		dbase.query('SELECT region_name FROM world.region limit $1', [10] , function(err,result) {
			if(err){
				console.log(err);
				return callback(err);
			}
			return callback(null , result);
		});


	}

}
