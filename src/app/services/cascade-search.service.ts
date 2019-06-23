import {Continent} from '../model/continent';
import {Country} from '../model/country';
import {Trip} from '../model/trip';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {City} from "../model/city";

@Injectable({
  providedIn: 'root'
})
export class CascadeSearchService {
  private continentsUrl: string;
  private countriesUrl: string;
  private citiesUrl: string;
  private countriesByContinentsNameUrl: string;
  private citiesByContinentsNameUrl: string;
  private citiesByCountryNameUrl: string;
  private tripsByContinentUrl: string;
  private tripsByCountryUrl: string;
  private tripsByCityUrl: string;
  responseMessage: string;
  hasResult: boolean;

  constructor(private http: HttpClient) {
    this.continentsUrl = 'http://localhost:8081/continents';
    this.countriesUrl = 'http://localhost:8081/country';
    this.citiesUrl = 'http://localhost:8081/cities';
    this.countriesByContinentsNameUrl = 'http://localhost:8081/country/byContinent/';
    this.citiesByContinentsNameUrl = 'http://localhost:8081/cities/byContinentName/';
    this.citiesByCountryNameUrl = 'http://localhost:8081/cities/byCountryName/';
    this.tripsByContinentUrl = 'http://localhost:8081/tripsByContinent/';
    this.tripsByCountryUrl = 'http://localhost:8081/tripsByCountry/';
    this.tripsByCityUrl = 'http://localhost:8081//tripsByCity/';
  }

  public getContinents(): Observable<Continent[]> {
    return this.http.get<Continent[]>(this.continentsUrl)
      .pipe(catchError(this.handleError<Continent[]>('getContinents', [])));
  }

  public getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl)
      .pipe(catchError(this.handleError<Country[]>('getCountries', [])));
  }

  public getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.citiesUrl)
      .pipe(catchError(this.handleError<City[]>('getCities', [])));
  }

  public getCountriesByContinentName(name: String): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesByContinentsNameUrl + name)
      .pipe(catchError(this.handleError<Country[]>('getCountriesByContinentName name=${name}', [])));
  }

  public getCitiesByContinentName(name: String): Observable<City[]> {
    return this.http.get<City[]>(this.citiesByContinentsNameUrl + name)
      .pipe(catchError(this.handleError<City[]>('getCitiesByContinentName name=${name}', [])));
  }

  public getCitiesByCountryName(name: String): Observable<City[]> {
    return this.http.get<City[]>(this.citiesByCountryNameUrl + name)
      .pipe(catchError(this.handleError<City[]>('getCitiesByCountryName name=${name}', [])));
  }

  public getTripsByContinentName(name: String): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripsByContinentUrl + name)
      .pipe(catchError(this.handleError<Trip[]>('getTripsByCountryName name=${name}', [])));
  }

  public getTripsByCountryName(name: String): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripsByCountryUrl + name)
      .pipe(catchError(this.handleError<Trip[]>('getTripsByContinentName name=${name}', [])));
  }

  public getTripsByCityName(name: String): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripsByCityUrl + name)
      .pipe(catchError(this.handleError<Trip[]>('getTripsByCityName name=${name}', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.responseMessage = error.error.ApiError.message;
      this.hasResult = false;
      return of(result as T);
    }
  }

}
