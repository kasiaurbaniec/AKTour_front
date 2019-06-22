import {Continent} from '../model/continent';
import {Country} from '../model/country';
import {Trip} from '../model/trip';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CascadeSearchService {
  private continentsUrl: string;
  private countriesUrl: string;
  private countriesByContinentsNameUrl: string;
  private tripsByContinentUrl: string;
  private tripsByCountryUrl: string;
  responseMessage: string;
  hasResult: boolean;

  constructor(private http: HttpClient) {
    this.continentsUrl = 'http://localhost:8081/continents';
    this.countriesUrl = 'http://localhost:8081/country';
    this.countriesByContinentsNameUrl = 'http://localhost:8081/country/byContinent/';
    this.tripsByContinentUrl = 'http://localhost:8081/tripsByContinent/';
    this.tripsByCountryUrl = 'http://localhost:8081/tripsByCountry/';
  }

  public getContinents(): Observable<Continent[]> {
    return this.http.get<Continent[]>(this.continentsUrl)
      .pipe(catchError(this.handleError<Continent[]>('getContinents', [])));
  }

  public getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl)
      .pipe(catchError(this.handleError<Country[]>('gettCountries', [])));
  }

  public getCountriesByContinentName(name: String): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesByContinentsNameUrl + name)
      .pipe(catchError(this.handleError<Country[]>('getCountriesByContinentName name=${name}', [])));
  }

  public getTripsByContinentName(name: String): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripsByContinentUrl + name)
      .pipe(catchError(this.handleError<Trip[]>('getTripsByCountryName name=${name}', [])));
  }

  public getTripsByCountryName(name: String): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripsByCountryUrl + name)
      .pipe(catchError(this.handleError<Trip[]>('getTripsByContinentName name=${name}', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.responseMessage = error.error.ApiError.message;
      this.hasResult = false;
      return of(result as T);
    }
  }

}
