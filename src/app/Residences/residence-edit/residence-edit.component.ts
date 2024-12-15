import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from 'src/app/Core/Services/residence.service';

@Component({
  selector: 'app-residence-edit',
  templateUrl: './residence-edit.component.html',
  styleUrls: ['./residence-edit.component.css']
})
export class ResidenceEditComponent implements OnInit {
  id!: number;
  residenceForm!: FormGroup;
  residence: any;

  constructor(
    private actR: ActivatedRoute, 
    private service: ResidenceService, 
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de la résidence depuis les paramètres de l'URL
    this.id = this.actR.snapshot.params['id'];

    // Récupérer les détails de la résidence à partir du service
    this.service.getResidenceByid(this.id).subscribe((data) => {
      this.residence = data;
      
      // Remplir le formulaire avec les données récupérées
      this.residenceForm.patchValue(this.residence);
    });

    // Initialiser le formulaire
    this.residenceForm = this.fb.group({
      name: [''],
      address: [''],
      status: [''],
      image: ['']
    });
  }

  // Méthode pour soumettre le formulaire et mettre à jour la résidence
  save() {
    if (this.residenceForm.valid) {
      const updatedResidence = this.residenceForm.value;
      this.service.updateResidence(this.id, updatedResidence).subscribe(() => {
        alert('Résidence mise à jour avec succès !');
      }, (error) => {
        console.error('Erreur de mise à jour:', error);
        alert('Échec de la mise à jour. Veuillez réessayer.');
      });
    }
  }
}
