import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iCountrySiteCount } from "../common/models/countrySiteCount";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MapService {

  base_url: string = 'http://localhost:8080';
  private region = new Subject<number>();
  private scubaType = new Subject<number>();
  private animalType = new Subject<number>();

  constructor(private http: HttpClient) { }

  getCountrySiteCount(): Observable<iCountrySiteCount[]>{
    return this.http.get<iCountrySiteCount[]>(this.base_url.concat('/map/SiteCountByCountry'));
  }

  sendRegion(regions: Array<number>){
    //this.region.next(regions);
  }

  updateRegion(){}

  updateScubaType(){}

  updateAnimalType(){}

}
