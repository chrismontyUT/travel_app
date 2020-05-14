import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import * as d3_projection from 'd3-geo-projection';
import * as topojson from 'topojson';
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { JsonService } from '../services/json.service';
import { MapService } from "../services/map.service";
import { Observable } from "rxjs";
import { iZoneSiteCount } from "../common/models/zoneSiteCount";
import { iZoneInfo } from "../common/models/zoneInfo";
import { iDiveSite } from "../common/models/diveSite";

@Component({
	selector: 'app-map',
	providers: [JsonService],
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss'],
	encapsulation: ViewEncapsulation.None
	})
export class MapComponent implements OnInit {
	private svg: any;
	private readonly width: number = window.innerWidth;
	private readonly height: number = window.innerHeight;
	private projection: any;
	private path: any;
	private world: any;
	private tooltipOffset: Record<string, number> = {x: 15 , y: -35};
	private tooltip: any;
	public active: any = d3.select(null);
	public activeZoneInfo$: Observable<iZoneInfo>;
	public zoneSiteCounts: iZoneSiteCount[];
	public zoneDiveSites: iDiveSite[];
	private features: any;
	private featureCollection: any;
	private zoom: any;
	private view:any;
	private sidebarActive: boolean = false;
	private showSites: boolean = false;
	public exitIcon = faTimesCircle;
	public backIcon;

	constructor(
		private readonly jsonService: JsonService,
		private readonly mapService: MapService
	){ }

	ngOnInit() {
		this.jsonService.getData('assets/topojson/countries.json')
			.subscribe(data => this.setMap(data) , err => console.log(err));

		this.mapService.getZoneSiteCount()
			.subscribe(data => this.zoneSiteCounts = data,
						error => console.log(error));

		this.activeZoneInfo$ = this.mapService.activeZoneInfo;
	};

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
			.on("zoom", () => this.zoomMap());

		this.svg = d3.select('mat-sidenav-content')
            .append('svg')
			.attr('width', '100%')
			.attr('height', '99%')
            .call(this.zoom);

		this.view = this.svg.append('rect')
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
			.attr('class', 'zone')
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

	zoomMap(){
        this.features.style("stroke-width", 1.5 / d3.event.transform.k + "px");
        this.features.attr("transform", d3.event.transform);
        this.features.selectAll('.nozoom')
            .attr('r', 5 / d3.event.transform.k);
    }

	showToolTip(d){
		this.tooltip.style('opacity' , .90)
			.html(d.properties.geonunit + '<br/><br/>' + 'Dive Sites: ' +
				this.zoneSiteCounts
					.filter(function(zone)
					{return zone.zone_short_name == d.properties.geonunit})[0].site_count);
	}

	hideToolTip(){
		this.tooltip.style('opacity' , 0);
	}

	clicked(d) {
		//highlight the clicked zone
		if (this.active.data()[0] === d) {
			this.sidebarActive = false;
			return this.resetMap();
		}
		//get zone info data
		this.mapService.sendClickedZone(d.properties.geonunit);
		this.active.classed("highlighted", false);
		this.active = d3.selectAll('.zone')
			.filter(function(i){return i['properties']['geonunit'] == d.properties.geonunit})
			.classed("highlighted" , true);
		this.sidebarActive = true;

		//zoom to zone bounding box
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
		this.showSites = false;
		this.features.selectAll("circle").remove();

		//reset zoom
		this.svg.transition()
      		.duration(750)
      		.call(this.zoom.transform, d3.zoomIdentity ); // updated for d3 v4
	  }

	getDiveSites() {
		this.showSites = true;
		this.mapService.getZoneDiveSites()
			.subscribe(data => this.displayScubaSites(data),
				error => console.log(error));
	}

	getPADISites() {
		this.showSites = true;
	}

	exitIconClicked(){
		this.sidebarActive = false;
		this.resetMap();
	}

	displayScubaSites(data: iDiveSite[]) {
		this.zoneDiveSites = data;
		let coordinates = Array<Array<number>>();
		for (let i=0; i < data.length; i++){
			coordinates.push([data[i].longitude, data[i].latitude]);
		}
		let projection = d3_projection.geoRobinson()
            .rotate([-10, 0, 0])
            .fitSize([this.width, this.height], this.featureCollection);
		this.features.selectAll("circle")
			.data(coordinates).enter()
			.append("circle")
			.attr("cx", function (d) { return projection(d)[0]; })
			.attr("cy", function (d) { return projection(d)[1]; })
			.attr("r", "1px")
			.attr("fill", "red")
            .attr("class", "nozoom")
	}
}
