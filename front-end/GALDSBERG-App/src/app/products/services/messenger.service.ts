import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  subject = new Subject();

  constructor() { }

  sendMessage(beer){
    this.subject.next(beer); //se emite un eveniment
  }

  getMessage(){
    return this.subject.asObservable();
  }
}
