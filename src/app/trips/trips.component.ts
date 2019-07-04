import { Component, OnInit } from '@angular/core';
import{ Trip } from '../model/trip';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  trips:Trip[];
  constructor(private tripService:TripService) { }

  ngOnInit() {
    this.tripService.findAll().subscribe(data => this.trips=  data);
  }
}
