import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { iCountrySiteCount } from "../common/models/countrySiteCount";
import { iCountryInfo } from "../common/models/countryInfo";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  base_url: string = 'http://localhost:8080';
  private regions = new Subject<number[]>();
  private scubaTypes = new Subject<string[]>();
  private animalTypes = new Subject<string[]>();
  private lastClickedCountry = new Subject<string>();
  private _activeCountryInfo = new Subject<iCountryInfo>();
  readonly activeCountryInfo = this._activeCountryInfo.asObservable();
  private _countrySiteCounts = new Subject<iCountrySiteCount[]>();
  readonly countrySiteCounts = this._countrySiteCounts.asObservable();
  private dataStore: {  activeCountryInfo: iCountryInfo,
                        lastClickedCountry: string,
                        regions: number[],
                        scubaTypes: string[],
                        animalTypes: string[] } = this.getInitialDataStore();

  constructor(private http: HttpClient) { }

  getCountryInfo(countryName: string){
    let params = new HttpParams();
    params = params.append('countryName', countryName);
    this.http.get<iCountryInfo>(this.base_url.concat('/map/CountryInfo'), { params })
        .subscribe(
            data => this.processCountryInfoResponse(data),
            error => this.handleError<iCountryInfo>('getCountryInfo', error)
        )
  }

  getCountrySiteCount(): Observable<iCountrySiteCount[]>{
    return this.http.get<iCountrySiteCount[]>(this.base_url.concat('/map/SiteCountByCountry'))
        .pipe(
            catchError(this.handleError<iCountrySiteCount[]>('getCountrySiteCount', []))
        );
  }

  sendRegion(regions: Array<number>){
    this.regions.next(regions);
  }

  sendScubaType(types: Array<string>){
    this.scubaTypes.next(types);
  }

  sendAnimalType(types: Array<string>){
    this.animalTypes.next(types);
  }

  sendClickedCountry(countryName: string){
    if(countryName == this.dataStore.lastClickedCountry) return;
    this.lastClickedCountry.next(countryName);
    this.dataStore.lastClickedCountry = countryName;
    this.getCountryInfo(countryName);
  }

  processCountryInfoResponse(data: any){
    this.dataStore.activeCountryInfo = data;
    console.log("data returned!!!", data);
    this._activeCountryInfo.next(data);
  }

  getInitialDataStore(){
    const emptyCountryInfo = (): iCountryInfo => ({
      country_full_name: 'EMPTY',
      iso2: '',
      country_short_name: 'EMPTY!!!',
      continent: '',
      sub_region: '',
      population: 0,
      capitol: '',
      major_geography: '',
      predominant_language: '',
      driving_side: '',
      peak_tourist_season: '',
      best_time_to_dive: '',
      bad_time_to_go: '',
      bodies_of_water: '',
      country_description: ''
    });
    this._activeCountryInfo.next(emptyCountryInfo());
    return { activeCountryInfo: emptyCountryInfo(), lastClickedCountry: '', regions: [], scubaTypes: [], animalTypes: [] }
  }

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
