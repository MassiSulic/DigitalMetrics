import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { LoginUsuario } from '../../models/login-usuario';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { NuevoUsuario } from '../../models/nuevo-usuario';
import { ChangePasswordDTO } from '../../models/change-password-dto';
import { EmailPasswordService } from '../../services/email-password.service';
import { MessageService } from 'primeng/api';


@Component({
    selector: 'app-change-password',
    templateUrl: './changepassword.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `],
    providers: [MessageService]
})
export class ChangePasswordComponent implements OnInit{

    password: string;
    confirmPassword: string;
    tokenPassword: string;

    dto: ChangePasswordDTO;

    constructor(
      public layoutService: LayoutService,
      private emailPasswordService: EmailPasswordService,
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private messageService: MessageService
      ) { }

      ngOnInit() {
      }

      onChangePassword(): void {
        if(this.password !== this.confirmPassword) {
          this.messageService.add({severity: 'error', summary: 'Procedimiento Fallido', detail: 'Las contraseñas no coinciden' });
          return;
        }
        this.tokenPassword = this.activatedRoute.snapshot.params.tokenPassword;
        this.dto = new ChangePasswordDTO(this.password, this.confirmPassword, this.tokenPassword);
        this.emailPasswordService.changePassword(this.dto).subscribe(
          data => {
            this.router.navigate(['/auth/login']);
        }
        );
      }
}
