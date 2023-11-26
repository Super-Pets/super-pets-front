import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAnimals } from '../models/animals';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  url: string = 'http://localhost:8081/animals';

  constructor(private http: HttpClient) {}

  createAnimal(body: IAnimals): Observable<any> {
    return this.http.post(this.url, body);
  }

  getAnimals(): Observable<any> {
    return this.http.get(this.url);
  }

  getAnimalById(id: any): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  editAnimal(id: number, body: IAnimals): Observable<any> {
    return this.http.put(`${this.url}/${id}`, body);
  }

  deleteAnimal(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

}
