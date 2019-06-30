import {Component, OnInit} from '@angular/core';
import {AddTripService} from "../services/add-trip.service";
import {Trip} from "../model/trip";
import {Hotel} from "../model/hotel";
import {Airport} from "../model/airport";


@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {
  trip = new Trip();
  hotels: Hotel[];
  airports: Airport[];

  constructor(
    private addTripService: AddTripService
  ) {}

  ngOnInit() {
    this.addTripService.getHotels().subscribe(data => this.hotels = data);
    this.addTripService.getAirports().subscribe(data => this.airports = data);
  }

  public onSubmit(addTripForm) {
    this.addTripService.addTrip(this.trip).subscribe(data => this.trip = data);
    console.log(this.trip);
    console.log(addTripForm);
  }

  public countDays(dateFrom: Date, dateTo: Date){

  }
  // public isDatesOrderValid(dateFrom: Date, dateTo: Date):boolean{
  //   return dateFrom.getMilliseconds()<dateTo.getMilliseconds();
  // }
}
