import { Component, OnInit , OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import * as d3_projection from 'd3-geo-projection';
import * as topojson from 'topojson';
import {JsonService} from '../json.service';
import { Observable } from 'rxjs';
import { rootRenderNodes } from '@angular/core/src/view';

@Component({
	selector: 'app-map',
	providers: [JsonService],
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {
	@ViewChild('map') private mapContainer: ElementRef;
	@Input() private mapdata: Array<any>;
	private margin: any = { top: 20, bottom: 20, left: 20, right: 20};
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
		this.width = 1500;
		this.height = 1000;

		this.projection = d3_projection.geoRobinson()
			.scale(191.78)
			.center([-0.001805,11.2586784])
			.translate( [this.width / 2, this.height / 2] );

		this.path = d3.geoPath()
			.projection(this.projection);

		//const element = this.mapContainer.nativeElement;

		this.svg = d3.select('body').append('svg')
			.attr('width', this.width)
			.attr('height', this.height);

		var features = this.svg.append('g')
			.attr('class' , 'features');

		console.log(topojson.feature(this.world , this.world.objects.subunits));

		this.tooltip = d3.select('body').append('div').attr('class' , 'tooltip');

		features.selectAll('path')
			.data(topojson.feature(this.world , this.world.objects.subunits).features)
			.enter()
			.append('path')
			.attr('fill','#1c5785')
			//.attr( 'class', 'state' )
			.attr( 'd', this.path )
			.on('mouseover' , this.showTooltip)
			.on('mousemove' , this.moveTooltip)
			.on('mouseout'  , this.hideTooltip);
	}

	showTooltip(d){
		this.moveTooltip();

		this.tooltip.style('display' , 'block')
			.text(d.properties.name);
	}

	moveTooltip(){
		this.tooltip.style('top' , (d3.event.pageY+this.tooltipOffset.y)+'px')
			.style('left' , (d3.event.pageX+this.tooltipOffset.x)+'px');
	}

	hideTooltip(){
		this.tooltip.style('display' , 'none');
	}

	ngAfterViewInit(){

	}

	ngOnChanges() {

	}

}
