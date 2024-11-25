import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent implements OnInit{
  residenceId: number | undefined;
  apartmentss: any[] = []; 
  apartments = [
    { apartNum: 101, floorNum: 1, surface: 50, terrace: true, surfaceTerrace: 10, category: 'T2' },
    { apartNum: 102, floorNum: 1, surface: 60, terrace: false, surfaceTerrace: 0, category: 'T3' },
    { apartNum: 201, floorNum: 2, surface: 70, terrace: true, surfaceTerrace: 20, category: 'T3' },
    // Ajoutez d'autres appartements simulés ici
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.residenceId = +this.route.snapshot.paramMap.get('residenceId')!;
    this.apartments = this.apartments; 
  
  }

}
