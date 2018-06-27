import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
         MatListModule, MatIconRegistry } from '@angular/material';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NavbarComponent } from './navbar/navbar.component';
import { MapViewComponent } from './map-view/map-view.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { MyMapsViewComponent } from './my-maps-view/my-maps-view.component';
import { SaveSearchComponent } from './save-search/save-search.component';
import { MapComponent } from './map/map.component';
import {JsonService} from './json.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapViewComponent,
    SearchComponent,
    ProfileComponent,
    SettingsComponent,
    MyMapsViewComponent,
    SaveSearchComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    TooltipModule.forRoot(),
		BsDropdownModule.forRoot(),
		HttpClientModule
  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
