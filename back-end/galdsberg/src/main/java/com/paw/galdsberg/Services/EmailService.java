package com.paw.galdsberg.Services;
import com.paw.galdsberg.Entities.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    public EmailService(JavaMailSender javaMailSender){
        this.javaMailSender = javaMailSender;
    }

    public void sendEmail(Email email) throws MailException {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(email.getReceiver());
        mail.setFrom(email.getSender());
        mail.setSubject(email.getSubject());
        mail.setText("Email trimis de catre "+email.getSender()+"\nSubiect: \n"+email.getMessage());
        javaMailSender.send(mail);
    }

}
