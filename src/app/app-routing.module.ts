import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { SearchComponent } from './search/search.component';
import { MyMapsViewComponent } from './my-maps-view/my-maps-view.component';

const routes: Routes = [
	{path: 'MyMaps' , component: MyMapsViewComponent},
	{path: 'Search' , component: SearchComponent},
	{path: 'Map'		, component: MapComponent},
	{path: '',		redirectTo: '/Map',		pathMatch: 'full'},
	{path: '**',  redirectTo: '/Map',		pathMatch: 'full'}
];

@NgModule({
	exports: [RouterModule],
	imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})



export class AppRoutingModule { }
