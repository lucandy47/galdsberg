import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../models/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

private allBeersUrl="http://localhost:8080/products";
private lagerBeersUrl="http://localhost:8080/products/category/LagerAndPilsner";
private wheatBeersUrl="http://localhost:8080/products/category/Wheat";
private darkBeersUrl="http://localhost:8080/products/category/Dark";
private ipaBeersUrl="http://localhost:8080/products/category/IPA";
private specialtyBeersUrl="http://localhost:8080/products/category/Specialty";

  constructor(private httpClient:HttpClient) { }

  getBeersList(): Observable<Beer[]>{
    return this.httpClient.get<Beer[]>(`${this.allBeersUrl}`);
  }
  getLagerBeersList(): Observable<Beer[]>{
    return this.httpClient.get<Beer[]>(`${this.lagerBeersUrl}`);
  }
  getWheatBeersList(): Observable<Beer[]>{
    return this.httpClient.get<Beer[]>(`${this.wheatBeersUrl}`);
  }
  getDarkBeersList(): Observable<Beer[]>{
    return this.httpClient.get<Beer[]>(`${this.darkBeersUrl}`);
  }
  getIpaBeersList(): Observable<Beer[]>{
    return this.httpClient.get<Beer[]>(`${this.ipaBeersUrl}`);
  }
  getSpecialtyBeersList(): Observable<Beer[]>{
    return this.httpClient.get<Beer[]>(`${this.specialtyBeersUrl}`);
  }

  getBeerById(id: number): Observable<Beer>{
    return this.httpClient.get<Beer>(`${this.allBeersUrl}/${id}`);
  }

  addBeer(beer:Beer):Observable<Object>{
    return this.httpClient.post(`${this.allBeersUrl}`,beer);
  }

  updateBeer(id:number,beer:Beer): Observable<Object>{
      return this.httpClient.put(`${this.allBeersUrl}/${id}`, beer);
  }

  deleteBeer(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.allBeersUrl}/${id}`);
  }
}
