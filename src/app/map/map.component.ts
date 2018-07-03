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

	constructor(private jsonservice: JsonService) {
		this.margin = { top: 20, bottom: 20, left: 20, right: 20};
		this.svg;
		this.width;
		this.height;
		this.projection;
		this.path;
		this.tooltipOffset = {x: 5 , y: -25};
		this.tooltip;
	}

	ngOnInit() {

		this.jsonservice.getData('assets/topojson/countries.json')
			.subscribe(data => this.setMap(data) , err => console.log(err));
	}


	setMap(data:Object){

		this.world = data;
		this.width = 1519.2;
		this.height = 699;

		this.projection = d3_projection.geoRobinson()
			.scale(100)
			.center([0 ,0])
			//.translate( [0 , this.height / 2] );

		this.path = d3.geoPath()
			.projection(this.projection);

		this.svg = d3.select('body').append('svg')
			.attr("preserveAspectRatio", "xMinYMin meet")
			.attr("viewBox", "0 0 1920 1080")
			.attr('width', '100%')
			.attr('height', '100%')

		var features = this.svg.append('g')
			.attr('class' , 'features')

		//console.log(topojson.feature(this.world , this.world.objects.subunits));
		//this.tooltip = d3.select('body').append('div')
		//				.attr('class' , 'tooltip')
		console.log(this.world.objects.subunits.type === "GeometryCollection")
		features.selectAll('path')
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
				});
	}

	ngAfterViewInit(){

	}

	ngOnChanges() {

	}

}
