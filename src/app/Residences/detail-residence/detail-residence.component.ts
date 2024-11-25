import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-residence',
  templateUrl: './detail-residence.component.html',
  styleUrls: ['./detail-residence.component.css']
})
export class DetailResidenceComponent {
  residence: any | null = null; // Propriété pour stocker les données de la résidence
  residences = [
    {id:1,"name": "Omran 15","address":"Prés du MG Génèrale ", "image":"../../assets/images/R1.jpeg", status: "Disponible"},
    {id:2,"name": "Narjes ", "address":"Ariana Soghra","image":"../../assets/images/R2.jpg", status: "En Vendu" },
  ];
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.loadResidence();
  }

  // Charger les informations de la résidence actuelle
  loadResidence(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.residence = this.residences.find(res => res.id === id);
  }

  // Naviguer vers la résidence suivante
  nextResidence(): void {
    if (this.residence) {
      const currentIndex = this.residences.findIndex(res => res.id === this.residence.id);
      const nextIndex = (currentIndex + 1) % this.residences.length; 
      const nextId = this.residences[nextIndex].id;

      // Redirection vers la prochaine résidence
      this.router.navigate(['/residences', nextId]).then(() => {
        this.loadResidence(); // Recharger les données
      });
    }
  }

}
