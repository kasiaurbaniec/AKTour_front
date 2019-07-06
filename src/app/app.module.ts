import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HotelsAllComponent } from './hotels-all/hotels-all.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HotelService } from './services/hotel.service';
import { TripsComponent } from './trips/trips.component';
import { CascadeSearchComponent } from './cascade-search/cascade-search.component';
import { HeaderComponent } from './header/header.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { MariottComponent } from './mariott/mariott.component';
import { ZaciszeComponent } from './zacisze/zacisze.component';
import { HiltonComponent } from './hilton/hilton.component';
import { LeCorbusiereComponent } from './le-corbusiere/le-corbusiere.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { BuyTripFormComponent } from './buy-trip-form/buy-trip-form.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsAllComponent,
    TripsComponent,
    CascadeSearchComponent,
    HeaderComponent,
    DropdownMenuComponent,
    ImgSliderComponent,
    AddTripComponent,
    MariottComponent,
    ZaciszeComponent,
    HiltonComponent,
    LeCorbusiereComponent,
    TripDetailComponent,
    BuyTripFormComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
