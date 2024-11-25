import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './Residences/residences/residences.component';
import { HomeComponent } from './home/home.component';
import { DetailResidenceComponent } from './Residences/detail-residence/detail-residence.component';
import { AddResidenceComponent } from './Residences/add-residence/add-residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApartmentsByResidenceComponent } from './Apartments/apartments-by-residence/apartments-by-residence.component';
import { ApartmentsComponent } from './Apartments/apartments/apartments.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: 'residences/:id', component: DetailResidenceComponent  },
  { path: 'add-residence', component: AddResidenceComponent },
  {path : 'apartments', component:ApartmentsComponent},
  { path: 'residences/:id/apartments', component: ApartmentsByResidenceComponent },
    { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
