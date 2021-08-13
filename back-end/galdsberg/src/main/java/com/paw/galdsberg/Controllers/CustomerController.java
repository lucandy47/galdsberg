package com.paw.galdsberg.Controllers;

import com.paw.galdsberg.Entities.Email;
import com.paw.galdsberg.Services.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class CustomerController {



  @Autowired
  private EmailService emailService;

 //some other code
  

  @PostMapping(value = "/email")
  public ResponseEntity<Email> enviarEmail(@RequestBody Email email) {
    try {
      emailService.sendEmail(email);
      return new ResponseEntity<>(email,  HttpStatus.OK);
    } catch( MailException e){
      System.out.println(e.getMessage());
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }


  }

}
