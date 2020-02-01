import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './settings/settings.component';
import { MyMapsViewComponent } from './my-maps-view/my-maps-view.component';
import { MapModule } from './map/map.module';
import { JsonService } from './services/json.service';
import { MatDialogModule } from '@angular/material/dialog';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { SearchQuestionComponent } from './search-question/search-question.component';
import { SearchQuestionCardComponent } from './search-question-card/search-question-card.component';
import { LoaderModule } from './loader/loader.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    SettingsComponent,
    MyMapsViewComponent,
    ProgressBarComponent,
    SearchQuestionComponent,
    SearchQuestionCardComponent
  ],
  entryComponents: [SearchComponent],
  imports: [
    MapModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatProgressBarModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    LoaderModule
  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule {

	constructor(router : Router){

	}
 }
