import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit{
  residenceId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer l'id depuis l'URL pour mise à jour
    this.residenceId = this.route.snapshot.queryParams['id'] 
      ? Number(this.route.snapshot.queryParams['id']) 
      : null;

    if (this.residenceId) {
      this.loadResidence(this.residenceId); // Charger les données de la résidence pour mise à jour
    }
  }

  loadResidence(id: number): void {
    // Remplacez par le code pour charger la résidence depuis un service
    console.log(`Charger la résidence avec l'id ${id}`);
  }

  saveResidence(): void {
    if (this.residenceId) {
      console.log('Mise à jour de la résidence:', this.residenceId);
    } else {
      console.log('Ajout d’une nouvelle résidence');
    }
  }

}
