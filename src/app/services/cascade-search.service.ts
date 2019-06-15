import { Continent } from '../model/continent';
import { Country } from '../model/country';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CascadeSearchService {
  private continentsUrl: string;
  private countriesUrl: string;
  constructor(private http: HttpClient) {
    this.continentsUrl = 'http://localhost:8081/continents';
    this.countriesUrl = 'http://localhost:8081/country';
   }

  public getContinents(): Observable<Continent[]>{
    return this.http.get<Continent[]>(this.continentsUrl);
  }
  public getCountries():Observable<Country[]>{
    return this.http.get<Country[]>(this.countriesUrl);
  }
  public getContinentIdFromCountry(){
    
  }
}
