import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  protected showPopUpSource:any;

  constructor(){
     this.showPopUpSource = new Subject();

  }
  showPopUp$ = this.showPopUpSource;

  showPopUp() { 
    console.log("Hello2");
    this.showPopUpSource.next(true); 
  }
  closePopUp() { 
    console.log("goodbye");
    this.showPopUpSource.next(false); 
}

}