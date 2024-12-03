import { Component,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Apartment } from 'src/app/Core/Models/apartment';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  newApart: Apartment | null = null;
  
apartForm: FormGroup=this.fb.group({});

constructor(private fb: FormBuilder) {}

ngOnInit() {
  this.apartForm = this.fb.group({
    apartmentNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Seulement des chiffres
    floorNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Seulement des chiffres
    surface: ['', [Validators.required]],
    terrace: ['No', Validators.required], // Par défaut "No"
    surfaceTerrace: [{ value: '', disabled: true }],
    category: ['', Validators.required],
    residence: ['', Validators.required]
  });

  this.apartForm.get('terrace')?.valueChanges.subscribe(value => {
    const surfaceTerrace = this.apartForm.get('surfaceTerrace');
    if (surfaceTerrace) { // Vérification que surfaceTerrace n'est pas null
      if (value === 'Yes') {
        surfaceTerrace.enable();
      } else {
        surfaceTerrace.disable();
        surfaceTerrace.setValue(''); // Réinitialiser si le champ est désactivé
      }
    }
  });
  
}

// Méthode pour soumettre le formulaire
onSubmit() {
  if (this.apartForm.valid) {
    this.newApart = {
      apartNum: this.apartForm.value.apartmentNumber,
      floorNum: this.apartForm.value.floorNumber,
      surface: this.apartForm.value.surface,
      terrace: this.apartForm.value.terrace === 'Yes',
      surfaceterrace: this.apartForm.value.surfaceTerrace,
      category: this.apartForm.value.category,
      residence: this.apartForm.value.residence,
      ResidenceId:this.apartForm.value.ResidenceId
    };
    console.log('Nouvel appartement ajouté:', this.newApart);
  } else {
    console.log('Le formulaire est invalide.');
  }
}

// Méthode pour réinitialiser le formulaire
resetForm() {
  this.apartForm.reset();
}
}