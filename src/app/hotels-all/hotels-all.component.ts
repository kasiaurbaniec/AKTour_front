import { Component, OnInit } from '@angular/core';
import { Hotel } from '../model/hotel';
import { HotelService } from '../services/hotel.service'

@Component({
  selector: 'app-hotels-all',
  templateUrl: './hotels-all.component.html',
  styleUrls: ['./hotels-all.component.css']
})
export class HotelsAllComponent implements OnInit {
hotels: Hotel[];
  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.hotelService.findAll().subscribe(data => this.hotels=data);
  }     
}
 