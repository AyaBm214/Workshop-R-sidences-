import { Component, OnInit } from '@angular/core';
import { Apartment } from 'src/app/Core/Models/apartment';


@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  apartments: Apartment[] = [];  // Tableau d'appartements

  constructor() { }

  ngOnInit(): void {
    // Exemple d'ajout d'appartements
    this.apartments = [
      new Apartment(101, 1, 70, true, 15, 'T2', 1),
      new Apartment(102, 1, 85, false, 0, 'T3', 1),
      new Apartment(201, 2, 95, true, 20, 'T3', 2),
      new Apartment(202, 2, 75, true, 18, 'T2', 2)
    ];
  }

  // Méthode pour récupérer la liste des appartements
  getApartments(): Apartment[] {
    return this.apartments;
  }

}
