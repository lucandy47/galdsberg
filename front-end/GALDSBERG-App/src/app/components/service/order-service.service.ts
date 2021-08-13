import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http :HttpClient) { }

  private baseUrl = 'http://localhost:8080/orders';
  private getOrdersEmail='http://localhost:8080/orders/getOrders';

  public registerOrder(order:Order):Observable<any>{
    return this.http.post<any>(this.baseUrl,order);
  }

  public getOrdersByEmail(email:string):Observable<any>{
    return this.http.post<any>(this.getOrdersEmail,email);
  }
}
