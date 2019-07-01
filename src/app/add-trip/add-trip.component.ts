import {Component, OnInit} from '@angular/core';
import {AddTripService} from "../services/add-trip.service";
import {Hotel} from "../model/hotel";
import {Airport} from "../model/airport";
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Trip} from "../model/trip";


@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {
  addTripForm: FormGroup;
  hotels: Hotel[];
  airports: Airport[];
  trip=new Trip();
  public minDepartureDate = new Date(Date() + 'UTC');
  public minReturnDate = this.minDepartureDate;


  constructor(
    private addTripService: AddTripService) {
  }

  ngOnInit() {
    this.addTripService.getHotels().subscribe(data => this.hotels = data);
    this.addTripService.getAirports().subscribe(data => this.airports = data);
    this.addTripForm = new FormGroup({
      boardType: new FormControl(null,Validators.required),
      hotel: new FormControl(null),
      departureDate: new FormControl(null),
      returnDate: new FormControl(null),
      numberOfDays: new FormControl(null,this.correctValueValidator),
      homeAirport: new FormControl(null),
      destinAirport: new FormControl(null),
      adultPrice: new FormControl(null),
      childrenPrice: new FormControl(null),
      promoPrice: new FormControl(null),
      adultVacancy: new FormControl(null),
      childrenVacancy: new FormControl(null)
    });
  }

  public onSubmit() {
    console.log(this.addTripForm);
    this.trip.boardType = this.addTripForm.value.boardType;
    this.trip.hotel = this.addTripForm.value.hotel;
    this.trip.departureDate = this.addTripForm.value.departureDate;
    this.trip.returnDate = this.addTripForm.value.returnDate;
    this.trip.numberOfDays = this.addTripForm.value.numberOfDays;
    this.trip.homeAirport = this.addTripForm.value.homeAirport;
    this.trip.destinAirport = this.addTripForm.value.destinAirport;
    this.trip.adultPrice = this.addTripForm.value.adultPrice;
    this.trip.childrenPrice = this.addTripForm.value.childrenPrice;
    this.trip.promoPrice = this.addTripForm.value.promoPrice;
    this.trip.adultVacancy = this.addTripForm.value.adultVacancy;
    this.trip.childrenVacancy = this.addTripForm.value.childrenVacancy;
    this.addTripService.addTrip(this.trip).subscribe(data => this.trip = data);
    console.log(this.trip);
    this.addTripForm.reset();
  }
correctValueValidator(control: AbstractControl): ValidationErrors{
    const numberOfDaysValue=<[number]>control.value;
    if(numberOfDaysValue==(this.minReturnDate-this.minDepartureDate).toString()){
      return{'wrong numberOfDays value':true};
    }
}


}

