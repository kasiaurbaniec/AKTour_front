import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Trip} from '../model/trip'
import {Visitor} from "../model/visitor";

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private tripUrl: string;

  constructor(private http: HttpClient) {
    this.tripUrl = 'http://localhost:8081/trips';
  }

  public findAll(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripUrl);
  }

  public findOne(tripId: number) {
    console.log(this.tripUrl + '/' + tripId);
    return this.http.get<Trip>(this.tripUrl + '/' + tripId);
  }

  public addVisitor(tripId: number, visitor: Visitor) {
    console.log(this.tripUrl + '/' + tripId);
    return this.http.put<Trip>(this.tripUrl + '/' + tripId, visitor);
  }
}
