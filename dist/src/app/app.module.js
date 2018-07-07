"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var layout_1 = require("@angular/cdk/layout");
var material_1 = require("@angular/material");
var tooltip_1 = require("ngx-bootstrap/tooltip");
var dropdown_1 = require("ngx-bootstrap/dropdown");
var navbar_component_1 = require("./navbar/navbar.component");
var map_view_component_1 = require("./map-view/map-view.component");
var search_component_1 = require("./search/search.component");
var profile_component_1 = require("./profile/profile.component");
var settings_component_1 = require("./settings/settings.component");
var my_maps_view_component_1 = require("./my-maps-view/my-maps-view.component");
var save_search_component_1 = require("./save-search/save-search.component");
var map_component_1 = require("./map/map.component");
var json_service_1 = require("./json.service");
var pop_up_service_1 = require("./pop-up.service");
var dialog_demo_component_1 = require("./dialog-demo/dialog-demo.component");
var my_dialog_component_1 = require("./my-dialog/my-dialog.component");
var dialog_1 = require("@angular/material/dialog");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                map_view_component_1.MapViewComponent,
                search_component_1.SearchComponent,
                profile_component_1.ProfileComponent,
                settings_component_1.SettingsComponent,
                my_maps_view_component_1.MyMapsViewComponent,
                save_search_component_1.SaveSearchComponent,
                map_component_1.MapComponent,
                dialog_demo_component_1.DialogDemoComponent,
                my_dialog_component_1.MyDialogComponent,
            ],
            //entryComponents: [MyDialogComponent],
            entryComponents: [search_component_1.SearchComponent],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                layout_1.LayoutModule,
                material_1.MatToolbarModule,
                material_1.MatButtonModule,
                material_1.MatSidenavModule,
                material_1.MatIconModule,
                material_1.MatListModule,
                material_1.MatCardModule,
                dialog_1.MatDialogModule,
                tooltip_1.TooltipModule.forRoot(),
                dropdown_1.BsDropdownModule.forRoot(),
                http_1.HttpClientModule,
            ],
            providers: [json_service_1.JsonService, pop_up_service_1.PopUpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map