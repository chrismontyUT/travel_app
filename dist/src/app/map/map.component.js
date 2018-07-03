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
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonservice.getData('assets/topojson/countries.json')
            .subscribe(function (data) { return _this.setMap(data); }, function (err) { return console.log(err); });
    };
    MapComponent.prototype.setMap = function (data) {
        this.world = data;
        this.width = 1519.2;
        this.height = 699;
        this.projection = d3_projection.geoRobinson()
            .scale(100)
            .center([0, 0]);
        //.translate( [0 , this.height / 2] );
        this.path = d3.geoPath()
            .projection(this.projection);
        this.svg = d3.select('body').append('svg')
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "0 0 1920 1080")
            .attr('width', '100%')
            .attr('height', '100%');
        var features = this.svg.append('g')
            .attr('class', 'features');
        //console.log(topojson.feature(this.world , this.world.objects.subunits));
        //this.tooltip = d3.select('body').append('div')
        //				.attr('class' , 'tooltip')
        console.log(this.world.objects.subunits.type === "GeometryCollection");
        features.selectAll('path')
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
        });
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