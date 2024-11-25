import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent implements OnInit{
  residenceId: number | undefined;
  apartments: any[] = []; // Remplacez par un tableau d'appartements

  // Simuler des données statiques d'appartements
  allApartments = [
    { apartNum: 101, floorNum: 1, surface: 50, terrace: true, surfaceTerrace: 10, category: 'T2' },
    { apartNum: 102, floorNum: 1, surface: 60, terrace: false, surfaceTerrace: 0, category: 'T3' },
    { apartNum: 201, floorNum: 2, surface: 70, terrace: true, surfaceTerrace: 20, category: 'T3' },
    // Ajoutez d'autres appartements simulés ici
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Récupérer l'ID de la résidence
    this.residenceId = +this.route.snapshot.paramMap.get('residenceId')!;

    // Simuler la récupération des appartements d'une résidence
    this.apartments = this.allApartments.filter(apartment => apartment.floorNum === this.residenceId); 
    // Ici, vous filtrez par floorNum pour simuler la relation avec l'ID de résidence
  }

}
