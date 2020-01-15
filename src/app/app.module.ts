import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
         MatListModule, MatCardModule, MatProgressBarModule } from '@angular/material';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { MyMapsViewComponent } from './my-maps-view/my-maps-view.component';
import { SaveSearchComponent } from './save-search/save-search.component';
import { MapModule } from './map/map.module';
import { JsonService } from './services/json.service';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { SearchQuestionComponent } from './search-question/search-question.component';
import { SearchQuestionCardComponent } from './search-question-card/search-question-card.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    ProfileComponent,
    SettingsComponent,
    MyMapsViewComponent,
    SaveSearchComponent,
    ProgressBarComponent,
    SearchQuestionComponent,
    SearchQuestionCardComponent,
    LoaderComponent,
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
    FlexLayoutModule
  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule {

	constructor(router : Router){

	}
 }
