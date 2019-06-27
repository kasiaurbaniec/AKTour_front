import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsAllComponent } from './hotels-all/hotels-all.component'
import { TripsComponent } from './trips/trips.component'
import {AddTripComponent} from "./add-trip/add-trip.component";
import {CascadeSearchComponent} from "./cascade-search/cascade-search.component";


const routes: Routes = [
  { path: 'hotels', component: HotelsAllComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'addTrip', component: AddTripComponent },
  { path: 'cascadeSearch', component: CascadeSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
