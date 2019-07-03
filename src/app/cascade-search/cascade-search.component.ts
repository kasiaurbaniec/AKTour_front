import { Component, OnInit } from '@angular/core';
import { Continent } from '../model/continent'
import { Country } from '../model/country'
import { City } from '../model/city'
import { Trip } from '../model/trip'
import { CascadeSearchService } from '../services/cascade-search.service'
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-cascade-search',
  templateUrl: './cascade-search.component.html',
  styleUrls: ['./cascade-search.component.css']
})
export class CascadeSearchComponent implements OnInit {
  selectedContinent: Continent={continent_id:110, name:'Select'};
  selectedCountry: Country={id:110, name:'Select'};
  selectedCity: City={id:110, name:'Select'};
  continents: Continent[];
  countries: Country[];
  cities:City[];
  tripsFiltered: Trip[];
  hasResult:boolean;
  continentHasCountry:boolean;
  info: string;
  constructor(
    private cascadeSearchService: CascadeSearchService,
    private tripService: TripService) 
    { }

  ngOnInit() {
    this.hasResult=true;
    this.continentHasCountry=true;
    this.cascadeSearchService.getContinents().subscribe(data=>this.continents=data);
    this.cascadeSearchService.getCountries().subscribe(data=>this.countries=data);
    this.cascadeSearchService.getCities().subscribe(data=>this.cities=data);
    this.tripService.findAll().subscribe(data=>this.tripsFiltered=data);
    this.onSelectContinent(this.selectedContinent.name);
  }

  onSelectContinent(continentName){
    this.getTripsByContinent(continentName);
    this.cascadeSearchService.getCountriesByContinentName(continentName).subscribe(dataCounties=>{
      this.continentHasCountry = dataCounties.length > 0 ;
      if(this.continentHasCountry){
        this.countries=dataCounties;
        this.cascadeSearchService.getCitiesByContinentName(continentName).subscribe(dataCit=>this.cities=dataCit);
      } else {
        this.hasResult=false;
        }
    },
    error =>{console.log(error.error.ApiError.message);
    });
  }

  onSelectCountry(countryName){
    this.getTripsByCountry(countryName);
    this.cascadeSearchService.getCitiesByCountryName(countryName).subscribe(dataCities=>{
        this.continentHasCountry = dataCities.length > 0;
        if(this.continentHasCountry){
          this.cities=dataCities;
        } else {
          this.hasResult=false;
        }
      },
      error =>{console.log(error.error.ApiError.message);
      });
  }
  getTripsByCountry(countryName){
    this.cascadeSearchService.getTripsByCountryName(countryName).subscribe(data=>{
      this.hasResult=data.length> 0 ;
      this.tripsFiltered=data;
    }, 
    error=> {console.log(error.error.ApiError.message);  
    });
  }
  getTripsByContinent(continentName){
    this.cascadeSearchService.getTripsByContinentName(continentName).subscribe(data=>{
      this.hasResult=data.length> 0 ;
      this.tripsFiltered=data;
    }, 
    error=> {console.log(error.error.ApiError.message);  
    });
  }
  onSelectCity(cityName){
    this.cascadeSearchService.getTripsByCityName(cityName).subscribe(data=>{
        this.hasResult=data.length> 0;
        this.tripsFiltered=data;
      },
      error=> {console.log(error.error.ApiError.message);
      });
  }
}
