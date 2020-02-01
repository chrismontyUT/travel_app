import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { LoaderComponent } from "./loader.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        FontAwesomeModule,
        CommonModule
    ],
    declarations: [
        LoaderComponent
    ],
    exports: [
        LoaderComponent
    ]
})
export class LoaderModule { }