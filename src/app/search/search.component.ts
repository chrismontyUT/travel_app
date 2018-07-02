import { Component, OnInit, Inject } from '@angular/core';
import { PopUpService } from '../pop-up.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-search',
  //providers: [{
    //provide: MatDialogRef,
    //useValue: {
      //close: (dialogResult: any) => { }
    //}
  //}],
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

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
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