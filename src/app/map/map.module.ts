import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { LoaderModule } from "../loader/loader.module";
import { JsonService } from "../services/json.service";
import { MapComponent } from "./map.component";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { SiteCardComponent } from "../site-card/site-card.component";

@NgModule({
    imports: [
        MatSidenavModule,
        LoaderModule,
        CommonModule,
        MatButtonModule,
        MatCardModule
    ],
    providers: [
        JsonService
    ],
    declarations: [
        MapComponent,
        SiteCardComponent
    ],
    exports: [
        MapComponent
    ]
})

export class MapModule { }