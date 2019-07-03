import * as moment from "moment";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class DatesValidator {
  public today = new Date(new Date + 'UTC');
  public minDepartureDay = moment(this.today).add(1, 'day');


  public isDatesInCorrectOrder(departureDate: Date, returnDate: Date): boolean {
    return moment(departureDate).isBefore(returnDate);
  }

  public isDateInFuture(departureDate: Date): boolean {
    return moment(this.today).isAfter(departureDate);
  }

  public isTripLastLessThanThreeMonths(departureDate: Date, returnDate: Date) {
    return moment(returnDate).isBefore(moment(departureDate).add(3, 'months'));
  }

  public isnumberOfDaysCorrect(departureDate: Date, returnDate: Date, numberOfDays: number) {
    const tripDuration = moment(returnDate).diff(departureDate);
    const countDuration = moment.duration(tripDuration).asDays();
    return countDuration == numberOfDays;
  }
}
