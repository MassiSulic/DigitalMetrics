import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { LoginUsuario } from '../../models/login-usuario';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { EmailValuesDTO } from '../../models/email-values-dto';
import { EmailPasswordService } from '../../services/email-password.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  providers: [MessageService]
})
export class SendEmailComponent implements OnInit {

  mailTo: string;
  dto: EmailValuesDTO;

    constructor(
      public layoutService: LayoutService,
      private emailPasswordService: EmailPasswordService,
      private router: Router,
      private messageService: MessageService

      ) { }

      ngOnInit() {
      }


      async onSendEmail(): Promise<void> {
        this.dto = new EmailValuesDTO(this.mailTo);
        this.messageService.add({severity: 'success', summary: 'Procedimiento Exitoso', detail: 'Si el usuario existe recibirá un mail de recuperación' });
        this.emailPasswordService.sendEmail(this.dto).subscribe(data =>{
        });
        //await this.delay(1000);
        this.router.navigate(["auth/login"])
      }

      delay(time:number) {
        return new Promise<void>((resolve) => {
          setTimeout(() => {
            resolve();
          }, time); //
        });
      }


}
