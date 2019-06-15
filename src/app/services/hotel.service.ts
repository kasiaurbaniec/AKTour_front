import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hotel } from '../model/hotel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private hotelUrl: string;
 
  constructor(private http: HttpClient) {
    this.hotelUrl = 'http://localhost:8081/hotels';
  }
  public findAll(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelUrl);
  }
 
}
