import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
         MatListModule, MatCardModule } from '@angular/material';
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
import { JsonService } from './json.service';
import { PopUpService } from './pop-up.service';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    DialogDemoComponent,
    MyDialogComponent,
  ],
  //entryComponents: [MyDialogComponent],
  entryComponents: [SearchComponent],
  imports: [
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
    TooltipModule.forRoot(),
		BsDropdownModule.forRoot(),
    HttpClientModule,
  ],
  providers: [JsonService, PopUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
