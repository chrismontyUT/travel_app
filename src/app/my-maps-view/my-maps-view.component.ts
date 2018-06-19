import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-maps-view',
  templateUrl: './my-maps-view.component.html',
  styleUrls: ['./my-maps-view.component.scss']
})
export class MyMapsViewComponent implements OnInit {

  clickMessage: string;

  constructor() { }

  ngOnInit() {
  }

  onMyMapsClick() {
    this.clickMessage = "My Maps Clicked!"
    console.log(this.clickMessage);
 }

}
