import { Component, OnInit , OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import * as d3_projection from 'd3-geo-projection';
import * as topojson from 'topojson';
import {JsonService} from '../json.service';

@Component({
	selector: 'app-map',
	providers: [JsonService],
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss'],
	encapsulation: ViewEncapsulation.None
	})
export class MapComponent implements OnInit, OnChanges {
	@ViewChild('map') private mapContainer: ElementRef;
	@Input() private mapdata: Array<any>;
	private margin: any;
	private svg: any;
	private width: number;
	private height: number;
	private projection: any;
	private path: any;
	private world: any;
	private tooltipOffset: any;
	private tooltip: any;
	public active: any;
	private features: any;

	constructor(private jsonservice: JsonService) {
		this.margin = { top: 20, bottom: 20, left: 20, right: 20};
		this.svg;
		this.width;
		this.height;
		this.projection;
		this.path;
		this.tooltipOffset = {x: 5 , y: -25};
		this.tooltip;
		this.active = d3.select(null)
		this.features;
	}

	ngOnInit() {

		this.jsonservice.getData('assets/topojson/countries.json')
			.subscribe(data => this.setMap(data) , err => console.log(err));
	}


	setMap(data:Object){

		this.world = data;


		this.projection = d3_projection.geoRobinson()
			.scale(80)
			//.center([150 ,10])
			.translate([250,130]);

		this.path = d3.geoPath()
			.projection(this.projection);

		this.svg = d3.select('app-map').append('svg')
			//.attr("preserveAspectRatio", "xMinYMin meet")
			//.attr("viewBox", "0 0 1920 1080")
			.attr('width', '100%')
			.attr('height', '100%')

		this.svg.append('rect')
    		.attr("class", "background")
    		//.on("click", reset);

		this.features = this.svg.append('g')
			.attr('class' , 'features')

		//console.log(topojson.feature(this.world , this.world.objects.subunits));
		//this.tooltip = d3.select('body').append('div')
		//				.attr('class' , 'tooltip')
		this.features.selectAll('path')
			.data(topojson.feature(this.world , this.world.objects.subunits).features)
			.enter()
			.append('path')
			.attr( 'd', this.path )
			.on('mouseover' , (d) => {
				})
			.on('mousemove' , () => {
				//this.tooltip.style('top' , (d3.event.pageY+this.tooltipOffset.y)+'px')
				//	.style('left' , (d3.event.pageX+this.tooltipOffset.x)+'px');
				})
			.on('mouseout' , () => {
				//this.tooltip.style('display' , 'none');
				})
			.on('click' , this.clicked);
	}
	clicked(d) {
		console.log(d)
		var rect = document.getElementById('rect');
		console.log(rect);
		if (this.active.node() === this) return this.reset();
		this.active.classed("active", false);
		this.active = d3.select(d).classed("active", true);

		//var bounds = this.path.bounds(d),
		//	dx = bounds[1][0] - bounds[0][0],
		//	dy = bounds[1][1] - bounds[0][1],
		//	x = (bounds[0][0] + bounds[1][0]) / 2,
		//	y = (bounds[0][1] + bounds[1][1]) / 2,
		//	scale = .9 / Math.max(dx / width, dy / height),
		//	translate = [width / 2 - scale * x, height / 2 - scale * y];

		//this.features.transition()
		//	.duration(750)
		//	.style("stroke-width", 1.5 / scale + "px")
		//	.attr("transform", "translate(" + translate + ")scale(" + scale + ")");
	  }
	reset() {
		this.active.classed("active", false);
		this.active = d3.select(null);

		this.features.transition()
			.duration(750)
			.style("stroke-width", "1.5px")
			.attr("transform", "");
	  }


	ngAfterViewInit(){

	}

	ngOnChanges() {

	}

}
