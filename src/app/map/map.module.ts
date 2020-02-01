import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { LoaderModule } from "../loader/loader.module";
import { JsonService } from "../services/json.service";
import { MapService } from "../services/map.service";
import { MapComponent } from "./map.component";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@NgModule({
    imports: [
        MatSidenavModule,
        LoaderModule,
        CommonModule,
        MatButtonModule,
        MatCardModule
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