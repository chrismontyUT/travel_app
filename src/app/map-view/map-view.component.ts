import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-map-view',
	templateUrl: './map-view.component.html',
	styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

<<<<<<< HEAD
	constructor() { }

	ngOnInit() {
	}

=======
  clickMessage: string;

  constructor() { }

  ngOnInit() {
  }
  onMapViewClick() {
    this.clickMessage = "Map View Clicked!"
    console.log(this.clickMessage);
 }
>>>>>>> b27bb2fed3c231987023b201426bdf0e6afaedc8
}
