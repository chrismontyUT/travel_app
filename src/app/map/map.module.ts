import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { LoaderModule } from "../loader/loader.module";
import { JsonService } from "../services/json.service";
import { MapService } from "../services/map.service";
import { MapComponent } from "./map.component";

@NgModule({
    imports: [
        MatSidenavModule,
        LoaderModule
    ],
    providers: [
        JsonService,
        MapService
    ],
    declarations: [
        MapComponent
    ],
    exports: [
        MapComponent
    ]
})

export class MapModule { }