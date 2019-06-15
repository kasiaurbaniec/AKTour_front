import { Hotel } from './hotel';

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

}
