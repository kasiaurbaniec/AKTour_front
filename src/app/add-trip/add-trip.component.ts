import {Component, OnInit} from '@angular/core';
import {AddTripService} from "../services/add-trip.service";
import {Hotel} from "../model/hotel";
import {Airport} from "../model/airport";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Trip} from "../model/trip";
import * as moment from "moment";
import {DatesValidator} from "../validators/dates-validator";

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {
  addTripForm: FormGroup;
  hotels: Hotel[];
  airports: Airport[];
  trip = new Trip();
  departureDateValidationResponse: string;
  returnDateValidationResponse: string;
  numberOfDaysValidationResponse: string;
  onChangeResponse: string;
  public today = new Date(new Date + 'UTC');
  public minDepartureDay = moment(this.today).add(1, 'day');
  public defReturnDay = moment(this.minDepartureDay).add(7, 'day');
  public tripMaxPrice: number = 20000;
  public numberOfDaysValue: number = 7;

  constructor(
    private addTripService: AddTripService,
    private datesValidator: DatesValidator) {
  }

  ngOnInit() {
    this.addTripService.getHotels().subscribe(data => this.hotels = data);
    this.addTripService.getAirports().subscribe(data => this.airports = data);
    this.departureDateValidationResponse = "";
    this.returnDateValidationResponse = "";
    this.addTripForm = new FormGroup({
      boardType: new FormControl(null),
      hotel: new FormControl(null),
      departureDate: new FormControl(moment(this.minDepartureDay).format('YYYY-MM-DD'), Validators.required),
      returnDate: new FormControl(moment(this.defReturnDay).format('YYYY-MM-DD'), Validators.required),
      numberOfDays: new FormControl(this.numberOfDaysValue, Validators.required),
      homeAirport: new FormControl(null),
      destinAirport: new FormControl(null),
      adultPrice: new FormControl(5000, [Validators.required, Validators.min(1),
        Validators.max(this.tripMaxPrice)]),
      childrenPrice: new FormControl(null, [Validators.required, Validators.min(1),
        Validators.max(this.tripMaxPrice)]),
      promoPrice: new FormControl(null, [Validators.required, Validators.min(1),
        Validators.max(this.tripMaxPrice)]),
      adultVacancy: new FormControl(50, [Validators.required, Validators.min(0),
        Validators.max(100)]),
      childrenVacancy: new FormControl(50, [Validators.required, Validators.min(0),
        Validators.max(100)])
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
    this.addTripForm.reset({
      departureDate: moment(this.minDepartureDay).format('YYYY-MM-DD'),
      returnDate: moment(this.defReturnDay).format('YYYY-MM-DD'),
      numberOfDays: 7,
      adultPrice: 5000,
      adultVacancy: 50,
      childrenVacancy: 50
    });
  }

  onReset() {
    this.addTripForm.reset({
      departureDate: moment(this.minDepartureDay).format('YYYY-MM-DD'),
      returnDate: moment(this.defReturnDay).format('YYYY-MM-DD'),
      numberOfDays: 7,
      adultPrice: 5000,
      adultVacancy: 50,
      childrenVacancy: 50
    });
  }

  setTripMaxPrice(event): void {
    this.tripMaxPrice = event;
    this.addTripForm.get('childrenPrice').setValidators([Validators.required, Validators.min(1),
      Validators.max(event)]);
    this.addTripForm.get('childrenPrice').patchValue(event * 0.8);
    this.addTripForm.get('promoPrice').setValidators([Validators.required, Validators.min(1),
      Validators.max(event)]);
    this.addTripForm.get('promoPrice').patchValue(event * 0.75);
  }

  setDepartDate(event): void {
    if (this.datesValidator.isDateInFuture(event)) {
      this.departureDateValidationResponse = "Departure date shouldn't be in the past";
    } else {
      this.departureDateValidationResponse = "";
    }
    const returnTempDate = this.addTripForm.get('returnDate').value;
    const daysNumber = this.countDays(event, returnTempDate);
    this.addTripForm.get('numberOfDays').setValue(Math.round(daysNumber.valueOf()));
    if (this.datesValidator.isDatesTheSame(event, returnTempDate)) {
      this.numberOfDaysValidationResponse = "Trip should take at least one day";
    } else {
      if (this.datesValidator.isDatesInWrongOrder(event, returnTempDate)) {
        this.numberOfDaysValidationResponse = "Departure date shouldn't be after return date";
      } else {
        if (this.datesValidator.isTripLastMoreThanThreeMonths(event, returnTempDate)) {
          this.numberOfDaysValidationResponse = "Trip shouldn't last more than 3 months";
        } else {
          this.numberOfDaysValidationResponse = "";
        }
      }
    }
  }

  setReturnDate(event): void {
    if (this.datesValidator.isDateInFuture(event)
    ) {
      this.returnDateValidationResponse = "Return date shouldn't be in the past";
    } else {
      this.returnDateValidationResponse = "";
    }
    const departTempDate = this.addTripForm.get('departureDate').value;
    if (this.datesValidator.isDatesTheSame(departTempDate, event)) {
      this.numberOfDaysValidationResponse = "Trip should take at least one day";
    } else {
      if (this.datesValidator.isDatesInWrongOrder(departTempDate, event)) {
        this.numberOfDaysValidationResponse = "Departure date shouldn't be after return date";
      } else {
        if (this.datesValidator.isTripLastMoreThanThreeMonths(departTempDate, event)) {
          this.numberOfDaysValidationResponse = "Trip shouldn't last more than 3 months";
        } else {
          this.numberOfDaysValidationResponse = "";
        }
      }
    }
    const daysNumber = this.countDays(departTempDate, event);
    this.addTripForm.get('numberOfDays').setValue(Math.round(daysNumber.valueOf()));
  }

  setNumber(event): void {
    const departTempDate = this.addTripForm.get('departureDate').value;
    const returnTempDate = this.addTripForm.get('returnDate').value;
    if (this.datesValidator.isNumberOfDaysWrong(departTempDate, returnTempDate, event)) {
      this.onChangeResponse = "Incorrect number of days";
    } else {
      this.onChangeResponse = "";
    }
  }

  countDays(departureDate: Date, returnDate: Date): number {
    const tripDuration = moment(returnDate).diff(departureDate);
    return moment.duration(tripDuration).asDays();
  }
}

