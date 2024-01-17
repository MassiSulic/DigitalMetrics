import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { LoginUsuario } from '../../models/login-usuario';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit{

    valCheck: string[] = ['remember'];

    password!: string;


    loginUsuario: LoginUsuario;
    nombreUsuario: string;

    errMsj: string;

    constructor(
      public layoutService: LayoutService,
      private tokenService: TokenService,
      private authService: AuthService,
      private router: Router,
      ) { }

      ngOnInit() {
      }

      onLogin(): void {
        this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
        this.authService.login(this.loginUsuario).subscribe(
          data => {
            this.tokenService.setToken(data.token);
            this.router.navigate(['/inicio']);
          }
        );
      }
}
