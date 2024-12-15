import { Component, OnInit } from '@angular/core';
import { Annonce } from '../Core/Models/Annoce';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnnoceService } from '../Core/Services/annoce.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  annonces: Annonce[] = [];
  annonceForm: FormGroup;

  constructor(private annoceService: AnnoceService, private fb: FormBuilder , private r:Router) {
    this.annonceForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(70000), Validators.max(500000)]],
      residenceId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadAnnonces();
  }

  loadAnnonces(): void {
    this.annoceService.getAnnonces().subscribe(data => {
      this.annonces = data;
    });
  }

  addAnnonce(): void {
    if (this.annonceForm.valid) {
      this.annoceService.addAnnonce(this.annonceForm.value).subscribe(newAnnonce => {
        this.annonces.push(newAnnonce);
        this.r.navigate(['/residences']);
      });
    }
  }
  


}
