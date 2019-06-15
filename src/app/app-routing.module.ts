import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsAllComponent } from './hotels-all/hotels-all.component'


const routes: Routes = [
  { path: 'hotels', component: HotelsAllComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
