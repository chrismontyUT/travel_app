"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var d3 = require("d3");
var d3_projection = require("d3-geo-projection");
var topojson = require("topojson");
var json_service_1 = require("../json.service");
var MapComponent = /** @class */ (function () {
    function MapComponent(jsonservice) {
        this.jsonservice = jsonservice;
        this.margin = { top: 20, bottom: 20, left: 20, right: 20 };
        this.svg;
        this.width;
        this.height;
        this.projection;
        this.path;
        this.tooltipOffset = { x: 5, y: -25 };
        this.tooltip;
        this.active = d3.select(null);
        this.features;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonservice.getData('assets/topojson/countries.json')
            .subscribe(function (data) { return _this.setMap(data); }, function (err) { return console.log(err); });
    };
    MapComponent.prototype.setMap = function (data) {
        this.world = data;
        this.projection = d3_projection.geoRobinson()
            .scale(80)
            .translate([250, 130]);
        this.path = d3.geoPath()
            .projection(this.projection);
        this.svg = d3.select('app-map').append('svg')
            .attr('width', '100%')
            .attr('height', '100%');
        this.svg.append('rect')
            .attr("class", "background");
        //.on("click", reset);
        this.features = this.svg.append('g')
            .attr('class', 'features');
        //console.log(topojson.feature(this.world , this.world.objects.subunits));
        //this.tooltip = d3.select('body').append('div')
        //				.attr('class' , 'tooltip')
        this.features.selectAll('path')
            .data(topojson.feature(this.world, this.world.objects.subunits).features)
            .enter()
            .append('path')
            .attr('d', this.path)
            .on('mouseover', function (d) {
        })
            .on('mousemove', function () {
            //this.tooltip.style('top' , (d3.event.pageY+this.tooltipOffset.y)+'px')
            //	.style('left' , (d3.event.pageX+this.tooltipOffset.x)+'px');
        })
            .on('mouseout', function () {
            //this.tooltip.style('display' , 'none');
        })
            .on('click', this.clicked);
    };
    MapComponent.prototype.clicked = function (d) {
        console.log(d);
        var rect = document.getElementById('rect');
        console.log(rect);
        if (this.active.node() === this)
            return this.reset();
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
    };
    MapComponent.prototype.reset = function () {
        this.active.classed("active", false);
        this.active = d3.select(null);
        this.features.transition()
            .duration(750)
            .style("stroke-width", "1.5px")
            .attr("transform", "");
    };
    MapComponent.prototype.ngAfterViewInit = function () {
    };
    MapComponent.prototype.ngOnChanges = function () {
    };
    __decorate([
        core_1.ViewChild('map'),
        __metadata("design:type", core_1.ElementRef)
    ], MapComponent.prototype, "mapContainer", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "mapdata", void 0);
    MapComponent = __decorate([
        core_1.Component({
            selector: 'app-map',
            providers: [json_service_1.JsonService],
            templateUrl: './map.component.html',
            styleUrls: ['./map.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [json_service_1.JsonService])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map