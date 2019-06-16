import { Continent } from '../model/continent';
import { Country } from '../model/country';
import { Trip } from '../model/trip';
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
  private tripsByContinentUrl: string;
  private tripsByCountryUrl: string;
  
  constructor(private http: HttpClient) {
    this.continentsUrl = 'http://localhost:8081/continents';
    this.countriesUrl = 'http://localhost:8081/country';
    this.countriesByContinentsNameUrl = 'http://localhost:8081/country/byContinent/';
    this.tripsByContinentUrl = 'http://localhost:8081/tripsByContinent/';
    this.tripsByCountryUrl = 'http://localhost:8081/tripsByCountry/';
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
  public getTripsByContinentName(name: String):Observable<Trip[]>{
    return this.http.get<Trip[]>(this.tripsByContinentUrl+name);
  }
  public getTripsByCountryName(name: String):Observable<Trip[]>{
    return this.http.get<Trip[]>(this.tripsByCountryUrl+name);
  }
}
