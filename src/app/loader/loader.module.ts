import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { LoaderComponent } from "./loader.component";

@NgModule({
    imports: [
        FontAwesomeModule
    ],
    declarations: [
        LoaderComponent
    ],
    exports: [
        LoaderComponent
    ]
})
export class LoaderModule { }