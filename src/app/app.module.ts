import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ResidencesComponent } from './Residences/residences/residences.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ApartmentsComponent } from './Apartments/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './Apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './Apartments/add-apartment/add-apartment.component';
import { DetailResidenceComponent } from './Residences/detail-residence/detail-residence.component';
import { AddResidenceComponent } from './Residences/add-residence/add-residence.component';
import{HttpClientModule} from '@angular/common/http';
import { AnnonceComponent } from './annonce/annonce.component';
import { AnnoceService } from './Core/Services/annoce.service';
import { AddAnnonceComponent } from './annonce/add-annonce/add-annonce.component';
import { ResidenceEditComponent } from './Residences/residence-edit/residence-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    FooterComponent,
    NotFoundComponent,
    NavBarComponent,
    HomeComponent,
    ApartmentsComponent,
    ApartmentsByResidenceComponent,
    AddApartmentComponent,
    DetailResidenceComponent,
    AddResidenceComponent,
    AnnonceComponent,
    AddAnnonceComponent,
    ResidenceEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AnnoceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
