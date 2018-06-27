import * as d3 from 'd3';
import * as topojson from 'topojson';

export default class Map{

	public data:any;

	constructor(router){
		router.get('/' , this.print.bind(this));
	}

	print(){
		console.log('hiiiiii');
		this.loadTopojson();
	}

	loadTopojson(){
		this.data = require('../../../countries.topojson');
	}

	serveTopojson(){

	}

}
