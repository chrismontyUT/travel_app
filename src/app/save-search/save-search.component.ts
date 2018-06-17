import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-search',
  templateUrl: './save-search.component.html',
  styleUrls: ['./save-search.component.scss']
})
export class SaveSearchComponent implements OnInit {

  clickMessage: string;

  constructor() { }

  ngOnInit() {
  }

  onSaveSearchClick(){
    this.clickMessage = "Save Search Clicked!"
    console.log(this.clickMessage);
  }

}
