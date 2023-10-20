import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }

  // inserire dati nel DB (post)
  insertPersona(url: string, body: {}) {
    return this.http.post(url, body)
  };

  // prendere i dati dal DB (get)
  getPersone(url: string) {
    return this.http.get(url)
  };

  deletePersona(url: string, id: string) {
    return this.http.delete(`${url}/${id}.json`);
  }
}
