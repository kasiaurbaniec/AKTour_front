import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HotelsAllComponent } from './hotels-all/hotels-all.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { HotelService } from './services/hotel.service';
import { TripsComponent } from './trips/trips.component';
import { CascadeSearchComponent } from './cascade-search/cascade-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsAllComponent,
    TripsComponent,
    CascadeSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
