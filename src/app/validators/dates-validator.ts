import * as moment from "moment";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class DatesValidator {
  public today = new Date(new Date + 'UTC');

  public isDatesInWrongOrder(departureDate: Date, returnDate: Date): boolean {
    return moment(departureDate).isAfter(returnDate)||moment(departureDate).isSame(returnDate);
  }

  public isDateInFuture(departureDate: Date): boolean {
    return moment(this.today).isAfter(departureDate);
  }

  public isTripLastMoreThanThreeMonths(departureDate: Date, returnDate: Date) {
    return moment(returnDate).isAfter(moment(departureDate).add(3, 'months'));
  }
  public isDatesTheSame(departureDate: Date, returnDate: Date): boolean {
    return moment(departureDate).isSame(returnDate);
  }

  public isNumberOfDaysWrong(departureDate: Date, returnDate: Date, days:number){
    const tripDuration = moment(returnDate).diff(departureDate);
    const rightNumber= moment.duration(tripDuration).asDays();
    return days!=rightNumber;
  }
}
