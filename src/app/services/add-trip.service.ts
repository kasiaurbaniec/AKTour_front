import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Trip} from "../model/trip";

@Injectable({
  providedIn: 'root'
})
export class AddTripService {
  private addNewTripUrl: string;

  constructor(private http: HttpClient) {
    this.addNewTripUrl = "http://localhost:8081/trips";
  }
  // public addTrip():Observable<Trip>{
  //   return this.http.post<Trip>(this.addNewTripUrl)
  // }
}
