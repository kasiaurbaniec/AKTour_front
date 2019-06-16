import { Component, OnInit } from '@angular/core';
import { Continent } from '../model/continent'
import { Country } from '../model/country'
import { CascadeSearchService } from '../services/cascade-search.service'
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-cascade-search',
  templateUrl: './cascade-search.component.html',
  styleUrls: ['./cascade-search.component.css']
})
export class CascadeSearchComponent implements OnInit {
  selectedContinent: Continent = {continent_id: 1, name:"Europe"};
  selectedCountry: Country=     {id: 1,name: "Poland", continent:{continent_id:1, name:"Europe"}};
  continents: Continent[];
  countries: Country[];
  result:string;
  constructor(private cascadeSearchService: CascadeSearchService) { }

  ngOnInit() {
    this.cascadeSearchService.getContinents().subscribe(data=>this.continents=data);
    this.onSelectContinent(this.selectedContinent.continent_id);
  
  }

  onSelectContinent(continentId){
    this.cascadeSearchService.getCountries()
    .pipe(filter(()=>continentId == continentId))
    .subscribe(data=>this.countries=data);
    this.result="tutaj będą wyniki filtrowania kontynentów";
    this.onSelectCountry(this.selectedCountry.id);
  }

  onSelectCountry(countryId){
    this.result="tutaj będą tutaj będą wyniki filtrowania krajów";
    // this.cities=this.cascadeSearchService.getCity().filter((item)=>item.countryId==countryId);
  }
}
