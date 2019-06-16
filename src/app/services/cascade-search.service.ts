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
  private countriesByContinentsNameUrl: string;
  constructor(private http: HttpClient) {
    this.continentsUrl = 'http://localhost:8081/continents';
    this.countriesUrl = 'http://localhost:8081/country';
    this.countriesByContinentsNameUrl = 'http://localhost:8081/country/byContinent/';
   }

  public getContinents(): Observable<Continent[]>{
    return this.http.get<Continent[]>(this.continentsUrl);
  }
  public getCountries():Observable<Country[]>{
    return this.http.get<Country[]>(this.countriesUrl);
  }
  public getCountriesByContinentName(name: String):Observable<Country[]>{
    return this.http.get<Country[]>(this.countriesByContinentsNameUrl+name);
  }
}
