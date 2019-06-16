import { Component, OnInit } from '@angular/core';
import { Continent } from '../model/continent'
import { Country } from '../model/country'
import { Trip } from '../model/trip'
import { CascadeSearchService } from '../services/cascade-search.service'
import { filter } from 'rxjs/operators';
import { TripService } from '../services/trip.service';
@Component({
  selector: 'app-cascade-search',
  templateUrl: './cascade-search.component.html',
  styleUrls: ['./cascade-search.component.css']
})
export class CascadeSearchComponent implements OnInit {
  selectedContinent: Continent = {continent_id: 1, name:"Europe"};
  selectedCountry: Country=     {id: 1,name: "Poland"};
  continents: Continent[];
  countries: Country[];
  tripsFiltered: Trip[];
  result:string;
  constructor(
    private cascadeSearchService: CascadeSearchService,
    private tripService: TripService) 
    { }

  ngOnInit() {
    this.cascadeSearchService.getContinents().subscribe(data=>this.continents=data);
    this.tripService.findAll().subscribe(data=>this.tripsFiltered=data);
    this.result="All Trips - Choose your filter";
    this.onSelectContinent(this.selectedContinent.name);
  }

  onSelectContinent(continentName){
    this.cascadeSearchService.getCountriesByContinentName(continentName).subscribe(data=>this.countries=data);
    this.result="Trips found for "+continentName;
    this.cascadeSearchService.getTripsByContinentName(continentName).subscribe(data=>this.tripsFiltered=data);
    this.onSelectCountry(this.selectedCountry.name);
  }

  onSelectCountry(countryName){
    this.result="Trips found for "+countryName;
    this.cascadeSearchService.getTripsByCountryName(countryName).subscribe(data=>this.tripsFiltered=data);
  }
}
