import { Component, OnInit } from '@angular/core';
import { PopUpService } from '../pop-up.service';


@Component({
  selector: 'app-search',
  providers: [PopUpService],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  clickMessage: any;
  otherclickMessage: any;

  constructor(protected popUpSvc:PopUpService){}
    
  show$;

  ngOnInit() {
    this.show$ = this.popUpSvc.showPopUp$;
  }

  showPopUp() { 
    this.popUpSvc.showPopUp(); 
    this.otherclickMessage = "Hello2";
    console.log(this.otherclickMessage);
  }

  closePopUp() { 
    this.popUpSvc.closePopUp(); 
  }

  onNewSearchClick(){
    this.clickMessage = "Hello1";
    console.log(this.clickMessage);
  }

}
