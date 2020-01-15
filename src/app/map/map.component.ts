import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import * as d3_projection from 'd3-geo-projection';
import * as topojson from 'topojson';
import { JsonService } from '../services/json.service';
import { MapService } from "../services/map.service";
import { iCountrySiteCount } from "../common/models/countrySiteCount";

@Component({
	selector: 'app-map',
	providers: [JsonService, MapService],
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss'],
	encapsulation: ViewEncapsulation.None
	})
export class MapComponent implements OnInit {
	private margin: any;
	private svg: any;
	private readonly width: number;
	private readonly height: number;
	private projection: any;
	private path: any;
	private world: any;
	private tooltipOffset: any;
	private tooltip: any;
	public active: any;
	private features: any;
	private featureCollection: any;
	private zoom: any;
	private view:any;
	private sidebarActive: boolean;

	constructor(private jsonService: JsonService, private mapService: MapService) {
		this.margin = { top: 20, bottom: 20, left: 20, right: 20};
		this.width = window.innerWidth;
		this.height = window.innerHeight  * .9165;
		this.tooltipOffset = {x: 15 , y: -35};
		this.active = d3.select(null);
		this.sidebarActive = false;
	}

	ngOnInit() {
		this.jsonService.getData('assets/topojson/countries.json')
			.subscribe(data => this.setMap(data) , err => console.log(err));

		this.mapService.getCountrySiteCount()
			.subscribe(sites => this.displaySites(sites) , err => console.log(err));
	}

	setMap(data:Object){
		this.world = data;
		this.featureCollection = topojson.feature(this.world , this.world.objects.collection);
		this.projection = d3_projection.geoRobinson()
			.rotate([-10, 0, 0])
			.fitSize([this.width, this.height], this.featureCollection);

		this.path = d3.geoPath()
			.projection(this.projection);

		this.tooltip = d3.select('mat-sidenav-content').append('div')
				.attr('class' , 'tooltip')
				.style('opacity', 0);

		this.zoom = d3.zoom()
			.scaleExtent([1, 50])
			.on("zoom", () => {
				this.features.style("stroke-width", 1.5 / d3.event.transform.k + "px");
				this.features.attr("transform", d3.event.transform);
			});

		this.svg = d3.select('mat-sidenav-content').append('svg')
			.attr('width', '100%')
			.attr('height', this.height)
			.call(this.zoom);

		this.view = this.svg.append('rect')
    		.attr("class", "background")
			.on("click", () => {
				this.resetMap()}
			)
			.on("dblclick.zoom", null);

		this.features = this.svg.append('g');

		this.features.selectAll('path')
			.data(this.featureCollection.features)
			.enter()
			.append('path')
			.attr( 'd', this.path )
			.on('mouseover' , (d) => {
				this.showToolTip(d);
				})
			.on('mousemove' , () => {
				this.tooltip.style('top' , (d3.event.pageY + 3*this.tooltipOffset.y)+'px')
					.style('left' , (d3.event.pageX+this.tooltipOffset.x)+'px');
				})
			.on('mouseout' , () => {
				this.hideToolTip();
				})
			.on('click' , (d) => {
				this.clicked(d);
			});
	}

	showToolTip(d){
		this.tooltip.style('opacity' , .90)
			.html(d.properties.geonunit);
	}

	hideToolTip(){
		this.tooltip.style('opacity' , 0);
	}

	clicked(d) {
		//highlight the clicked country
		if (this.active.data()[0] === d) {
			this.sidebarActive = false;
			return this.resetMap();
		}
		this.active.classed("highlighted", false);
		this.active = d3.selectAll('path')
			.filter(function(i){return i['properties']['geonunit'] == d.properties.geonunit})
			.classed("highlighted" , true);
		this.sidebarActive = true;

		//zoom to country bounding box
		let bounds = this.path.bounds(d),
			dx = bounds[1][0] - bounds[0][0],
			dy = bounds[1][1] - bounds[0][1],
			x = (bounds[0][0] + bounds[1][0]) / 2.05,
			y = (bounds[0][1] + bounds[1][1]) / 2,
			scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / this.width, dy / this.height))),
			translate = [this.width / 2 - scale * x, this.height / 2 - scale * y];

		this.svg.transition()
			.duration(750)
			.call( this.zoom.transform, d3.zoomIdentity.translate(translate[0],translate[1]).scale(scale) ); // updated f
	  }
	  
	resetMap() {
		//remove highlighted color upon deselecting
		this.active.classed("highlighted", false);
		this.active = d3.select(null);

		//reset zoom
		this.svg.transition()
      		.duration(750)
      		.call(this.zoom.transform, d3.zoomIdentity ); // updated for d3 v4
	  }

	displaySites(sites) {
		console.log(sites);
	}
}
