import {Component, OnInit} from '@angular/core';
import {Trip} from '../model/trip';
import {ActivatedRoute} from "@angular/router";
import {TripService} from "../services/trip.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {
  trip: Trip;

  constructor(
    private route: ActivatedRoute,
    private tripService: TripService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    console.log(+this.route.snapshot.paramMap.get('id'));
    this.getTrip()
  }

  getTrip(): void {
    const tripId = +this.route.snapshot.paramMap.get('id');
    this.tripService.findOne(tripId).subscribe(oneTrip => this.trip = oneTrip);
  }

  goBack(): void {
    this.location.back();
  }
}
