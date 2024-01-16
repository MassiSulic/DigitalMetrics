package com.inusual.gestiondigital.emailpassword.controller;


import com.inusual.gestiondigital.emailpassword.dto.ChangePasswordDTO;
import com.inusual.gestiondigital.emailpassword.dto.EmailValuesDTO;
import com.inusual.gestiondigital.emailpassword.service.EmailService;
import com.inusual.gestiondigital.security.dto.Mensaje;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/email-password")
@CrossOrigin
public class EmailController {

    @Autowired
    EmailService emailService;


    @PostMapping("/send-email")
    public ResponseEntity<Mensaje> sendEmailTemplate(@RequestBody EmailValuesDTO dto) {
        return ResponseEntity.ok(emailService.sendEmailTemplate(dto));
    }

    @PostMapping("/change-password")
    public ResponseEntity<Mensaje> changePassword(@Valid @RequestBody ChangePasswordDTO dto) {
        return ResponseEntity.ok(emailService.changePassword(dto));
    }

}
