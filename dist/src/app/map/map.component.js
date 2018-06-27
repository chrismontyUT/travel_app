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
var d3_queue = require("d3-queue");
// import * as topojson from 'topojson';// import { world } from './map.countries';
var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.margin = { top: 20, bottom: 20, left: 20, right: 20 };
        this.margin = { top: 20, bottom: 20, left: 20, right: 20 };
        this.svg;
        this.width;
        this.height;
        this.projection;
        this.path;
        this.world = d3.json('https://unpkg.com/world-atlas@1/world/110m.json');
    }
    MapComponent.prototype.ngOnInit = function () {
        //this.setMap();
        this.width = 1800;
        this.height = 1100;
        this.projection = d3.geoMercator()
            .scale(191.78)
            .center([-0.001805, 11.2586784])
            .translate([this.width / 2, this.height / 2]);
        this.path = d3.geoPath()
            .projection(this.projection);
        //const element = this.mapContainer.nativeElement;
        this.svg = d3.select('body').append('svg')
            .attr('width', this.width)
            .attr('height', this.height);
        var features = this.svg.append('g')
            .attr('class', 'features');
        //var color = d3.scaleQuantize()
        //	.domain([0,1])
        //	.range([1:'q1-3', 2:'q2-3' , 3:'q3-3']);
        //console.log(this.svg);
        //console.log(this.world);
        d3_queue.queue()
            .defer(d3.json, this.world.objects)
            .await(this.loaddata());
        console.log(typeof this);
        ///this.drawMap();
    };
    MapComponent.prototype.mytopojson = function () {
    };
    MapComponent.prototype.loaddata = function () {
        this.svg.selectAll('countries')
            .data(this.world)
            .enter()
            .append('path')
            .attr('fill', '#1c5785')
            .attr('d', this.path);
    };
    MapComponent.prototype.qi = function (i) {
        return 'q' + i + '-3';
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
            templateUrl: './map.component.html',
            styleUrls: ['./map.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map