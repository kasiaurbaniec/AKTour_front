import { Hotel } from './hotel';
import {Airport} from "./airport";

export class Trip {
    id?: number;
    departureDate?: Date;
    returnDate?:Date;
    numberOfDays?: number;
    boardType?: string;
    adultPrice?: number;
    childrenPrice?: number;
    promoPrice?:number;
    adultVacancy?: number;
    childrenVacancy?: number;
    hotel?: Hotel;
    homeAirport?: Airport;
    destinAirport?: Airport;

}
