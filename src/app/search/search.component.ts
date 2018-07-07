import { Component, OnInit, Inject } from '@angular/core';
import { PopUpService } from '../pop-up.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  clickMessage: any;
  otherclickMessage: any;

  constructor (public thisDialogRef: MatDialogRef<SearchComponent>, 
  @Inject(MAT_DIALOG_DATA) public data: string) {}

  //constructor(protected popUpSvc:PopUpService){}
    
  //show$;

  ngOnInit() {
    //this.show$ = this.popUpSvc.showPopUp$;
  }

  onYesIKnow() {
    this.thisDialogRef.close('Yes I Know');
  }
  onNoIDont() {
    this.thisDialogRef.close('No I Dont');
  }

  //showPopUp() { 
    //this.popUpSvc.showPopUp(); 
    //this.otherclickMessage = "Hello2";
    //console.log(this.otherclickMessage);
  //}

  //closePopUp() { 
    //this.popUpSvc.closePopUp(); 
  //}

  //onNewSearchClick(){
    //this.clickMessage = "Hello1";
    //console.log(this.clickMessage);
  //}

}