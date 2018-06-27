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
var MapViewComponent = /** @class */ (function () {
    function MapViewComponent() {
    }
    MapViewComponent.prototype.ngOnInit = function () {
    };
    MapViewComponent.prototype.onMapViewClick = function () {
        this.clickMessage = 'Map View Clicked!';
        console.log(this.clickMessage);
    };
    MapViewComponent = __decorate([
        core_1.Component({
            selector: 'app-map-view',
            templateUrl: './map-view.component.html',
            styleUrls: ['./map-view.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], MapViewComponent);
    return MapViewComponent;
}());
exports.MapViewComponent = MapViewComponent;
//# sourceMappingURL=map-view.component.js.map