import { Component, OnInit } from '@angular/core';
import { Email } from '../models/email';
import { HttpClient } from '@angular/common/http';
import { EmailService } from '../service/email.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  ngOnInit(): void {
  }

  mail :Email = new Email();

  constructor(private http: HttpClient, private emailService :EmailService) { }

  private enviarEmail() {
    this.mail.receiver="proiectpaw2020@gmail.com";
    this.emailService.enviarEmail(this.mail)
      .subscribe(data => console.log(data));
  }

  onSubmit() {
    this.enviarEmail();
  }

}
