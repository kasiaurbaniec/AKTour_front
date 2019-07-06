import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TripService} from "../services/trip.service";
import {Location} from "@angular/common";
import {Trip} from "../model/trip";
import {FormControl, FormGroup} from "@angular/forms";
import {Visitor} from "../model/visitor";

@Component({
  selector: 'app-buy-trip-form',
  templateUrl: './buy-trip-form.component.html',
  styleUrls: ['./buy-trip-form.component.css']
})

export class BuyTripFormComponent implements OnInit {

  addVisitors: FormGroup;
  trip: Trip;
  visitor = new Visitor();

  constructor(
    private route: ActivatedRoute,
    private tripService: TripService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getTrip();
    this.addVisitors = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      age: new FormControl(null),
      street: new FormControl(null),
      streetNr: new FormControl(null),
      city: new FormControl(null),
      zipCode: new FormControl(null),
    });
  }

  getTrip(): void {
    const tripId = +this.route.snapshot.paramMap.get('id');
    this.tripService.findOne(tripId).subscribe(oneTrip => this.trip = oneTrip);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    this.visitor.firstName = this.addVisitors.value.firstName;
    this.visitor.lastName = this.addVisitors.value.lastName;
    this.visitor.street = this.addVisitors.value.street;
    this.visitor.streetNr = this.addVisitors.value.streetNr;
    this.visitor.city = this.addVisitors.value.city;
    this.visitor.zipCode = this.addVisitors.value.zipCode;
    this.tripService.addVisitor(this.trip.id,this.visitor).subscribe(data => this.trip = data);
    console.log(this.visitor);
  }
}
