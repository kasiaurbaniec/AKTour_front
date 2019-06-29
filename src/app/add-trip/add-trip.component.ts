import {Component, OnInit} from '@angular/core';
import {AddTripService} from "../services/add-trip.service";
import {Trip} from "../model/trip";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {
  trip = new Trip();

  constructor(
    private addTripService: AddTripService
  ) {

  }

  ngOnInit() {
  }


  public onSubmit() {
    this.addTripService.addTrip(this.trip).subscribe(data=>this.trip=data);
    console.log(this.trip);
  }
}
