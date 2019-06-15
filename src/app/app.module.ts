import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ContinentsComponent } from './continents/continents.component';
import { HotelsAllComponent } from './hotels-all/hotels-all.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { HotelService } from './services/hotel.service';

@NgModule({
  declarations: [
    AppComponent,
    ContinentsComponent,
    HotelsAllComponent
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
