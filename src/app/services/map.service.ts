import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iCountrySiteCount } from "../common/models/countrySiteCount";
import {Observable, of, Subject} from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  base_url: string = 'http://localhost:8080';
  private region = new Subject<number>();
  private scubaType = new Subject<number>();
  private animalType = new Subject<number>();

  constructor(private http: HttpClient) { }

  getCountryInfo(){

  }

  getCountrySiteCount(): Observable<iCountrySiteCount[]>{
    return this.http.get<iCountrySiteCount[]>(this.base_url.concat('/map/SiteCountByCountry'))
        .pipe(
            catchError(this.handleError<iCountrySiteCount[]>('getCountrySiteCount', []))
        );
  }

  sendRegion(regions: Array<number>){
    //this.region.next(regions);
  }

  updateRegion(){}

  updateScubaType(){}

  updateAnimalType(){}


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
