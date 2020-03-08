import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class SearchService {

    private whereTo = new Subject<string[]>();
    private diveType = new Subject<string[]>();
    private animalType = new Subject<string[]>();

	constructor() { }

    sendRegion(regions: Array<string>){
      this.whereTo.next(regions);
    }

    sendScubaType(types: Array<string>){
      this.diveType.next(types);
    }

    sendAnimalType(types: Array<string>){
      this.animalType.next(types);
    }

}
