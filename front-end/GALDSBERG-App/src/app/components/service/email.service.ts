import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http :HttpClient) { }

  private baseUrl = 'http://localhost:8080/api/email';

  enviarEmail(email :Email): Observable<any> {
    return this.http.post(`${this.baseUrl}`, email);
  }

}
