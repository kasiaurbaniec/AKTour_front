import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Trip} from "../model/trip";
import {Hotel} from "../model/hotel";
import {Airport} from "../model/airport";

@Injectable({
  providedIn: 'root'
})
export class AddTripService {
  private addNewTripUrl: string;
  private allHotelsUrl: string;
  private allAirportsUrl: string;

  constructor(private http: HttpClient) {
    this.addNewTripUrl = 'http://localhost:8081/trips';
    this.allHotelsUrl = 'http://localhost:8081/hotels';
    this.allAirportsUrl = 'http://localhost:8081/airports';
  }

  public addTrip(trip: Trip):Observable<Trip>{
    return this.http.post<Trip>(this.addNewTripUrl, trip);
  }
  public getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.allHotelsUrl);
  }
  public getAirports(): Observable<Airport[]> {
    return this.http.get<Airport[]>(this.allAirportsUrl);
  }
}
