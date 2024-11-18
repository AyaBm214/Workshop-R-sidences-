import { Component } from '@angular/core';
import { Residence } from 'src/app/Core/Models/residence';


@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences:Residence[]=[
    {id:1,"name": "Omran 15","address":"Prés du MG Génèrale ", "image":"../../assets/images/R1.jpeg", status: "Disponible"},
     {id:2,"name": "Narjes ", "address":"Ariana Soghra","image":"../../assets/images/R2.jpg", status: "En Vendu" },
     
   ];
   residenceToShow: number | null = null;
  favoriteResidences: Residence[] = [];
  searchText: string = '';

  showLocation(residence: Residence) {
    if (residence.address === "inconnu") {
      alert(`L'adresse de cette résidence est "inconnu".`);
      this.residenceToShow = null;
    } else {
      this.residenceToShow = residence.id;
    }
  }

  toggleFavorite(residence: Residence) {
    if (this.isFavorite(residence)) {
      this.favoriteResidences = this.favoriteResidences.filter(r => r.id !== residence.id);
    } else {
      this.favoriteResidences.push(residence);
    }
  }

  isFavorite(residence: Residence): boolean {
    return this.favoriteResidences.some(r => r.id === residence.id);
  }

  filteredResidences(): Residence[] {
    if (!this.searchText) {
      return this.listResidences;
    }
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

 

}
