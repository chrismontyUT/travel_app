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
  private currentRegions = new Subject<string[]>();
  private currentDiveTypes = new Subject<string[]>();
  private currentAnimalTypes = new Subject<string[]>();
  private _newSearchRegions = new Subject<string[]>();
  private _newSearchDiveTypes = new Subject<string[]>();
  private _newSearchAnimalTypes = new Subject<string[]>();

  readonly newSearchRegions = this._newSearchRegions.asObservable();
  readonly newSearchDiveTypes = this._newSearchDiveTypes.asObservable();
  readonly newSearchAnimalTypes = this._newSearchAnimalTypes.asObservable();

  private lastClickedCountry = new Subject<string>();
  private _activeCountryInfo = new Subject<iCountryInfo>();
  readonly activeCountryInfo = this._activeCountryInfo.asObservable();
  private _countrySiteCounts = new Subject<iCountrySiteCount[]>();
  readonly countrySiteCounts = this._countrySiteCounts.asObservable();
  private currentDataStore: {  activeCountryInfo: iCountryInfo,
                        lastClickedCountry: string,
                        regions: string[],
                        diveTypes: string[],
                        animalTypes: string[] } = this.getInitialDataStore();

  private newSearchDataStore: {  activeCountryInfo: iCountryInfo,
    lastClickedCountry: string,
    regions: string[],
    diveTypes: string[],
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

  getCountrySiteCount(regions?: string[], diveTypes?: string[], animals?: string[]): Observable<iCountrySiteCount[]>{
    return this.http.get<iCountrySiteCount[]>(this.base_url.concat('/map/SiteCountByCountry'))
        .pipe(
            catchError(this.handleError<iCountrySiteCount[]>('getCountrySiteCount', []))
        );
  }

  updateAnswers(answer: string, task: string, questionName: string){
    if(questionName == 'Where Are You Going?'){
      this.updateRegion(answer, task);
    }
    if(questionName == 'What Type of Scuba Diving Would You Like To Do?'){
      this.updateDiveType(answer, task);
    }
    if(questionName == 'What Animals Would You Like to See?'){
      this.updateAnimalType(answer, task);
    }
  }

  updateRegion(region: string, task: string){
    if(task == 'append'){
      this.newSearchDataStore.regions.push(region);
    }
    else{
      this.newSearchDataStore.regions.splice(this.newSearchDataStore.regions.indexOf(region, 1));
    }
    console.log('service updated with region');
    this._newSearchRegions.next(this.newSearchDataStore.regions);
  }

  updateDiveType(type: string, task: string){
    if(task == 'append'){
      this.newSearchDataStore.diveTypes.push(type);
    } else{
      this.newSearchDataStore.diveTypes.splice(this.newSearchDataStore.regions.indexOf(type, 1));
    }
    console.log('service updated with dive type');
    this._newSearchDiveTypes.next(this.newSearchDataStore.diveTypes);
  }

  updateAnimalType(type: string, task: string){
    if(task == 'append'){
      this.newSearchDataStore.animalTypes.push(type);
    } else{
      this.newSearchDataStore.animalTypes.splice(this.newSearchDataStore.regions.indexOf(type, 1));
    }
    console.log('service updated with animal type');
    this._newSearchAnimalTypes.next(this.newSearchDataStore.animalTypes);
  }

  sendClickedCountry(countryName: string){
    if(countryName == this.newSearchDataStore.lastClickedCountry) return;
    this.lastClickedCountry.next(countryName);
    this.newSearchDataStore.lastClickedCountry = countryName;
    this.getCountryInfo(countryName);
  }

  sendNewSearch(){
    this.currentDataStore = this.newSearchDataStore;
    this.getCountrySiteCount(this.currentDataStore.regions, this.currentDataStore.diveTypes, this.currentDataStore.animalTypes)
  }

  processCountryInfoResponse(data: any){
    this.newSearchDataStore.activeCountryInfo = data;
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
    return { activeCountryInfo: emptyCountryInfo(), lastClickedCountry: '', regions: [], diveTypes: [], animalTypes: [] }
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
