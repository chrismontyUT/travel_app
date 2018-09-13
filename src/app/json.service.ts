import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ 
  providedIn: 'root'
})
export class JsonService {

	constructor(private http: HttpClient) { }

	getData(url:string){
    console.log(url); 
    return this.http.get(url, {responseType: 'json'})
  }

}
