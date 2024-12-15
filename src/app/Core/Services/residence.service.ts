import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Residence } from '../Models/residence';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  residenceUrl="http://localhost:3000/residences"
  constructor(private http: HttpClient) { }
  getAllresidences(): Observable<Residence[]> {
    return this.http.get<Residence[]>(this.residenceUrl);
  }
  getResidenceByid(id:number)
  {
    return this.http.get<Residence>(this.residenceUrl+"/"+id);
  }
  addResidence(residence:Residence){
    return this.http.post(this.residenceUrl,residence);
  }
  deleteResidence(id: number): Observable<void> {
    return this.http.delete<void>(`${this.residenceUrl}${id}`);
  }
  updateResidence(id: number, updatedResidence: any): Observable<any> {
    return this.http.put(`${this.residenceUrl}/${id}`, updatedResidence);
  }
}
