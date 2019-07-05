import {Trip} from "./trip";

export class Visitor {
  id?: number;
  firstName: string;
  lastName: string;
  city: string;
  street: string;
  streetNr?: string;
  zipCode?: string;
  trip?: Trip;
}
