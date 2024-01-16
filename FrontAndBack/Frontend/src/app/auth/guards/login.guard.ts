import { TokenService } from '../services/token.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
  //  Guarda usada para evitar que un usuario ya logueado tenga que pasar por ventanas de autenticación
  //  si el usuario ya está logueado, directamento lo hacemos navegar al Home.
export class LoginGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.tokenService.isLogged()) {
      this.router.navigate(['/inicio']);
      return false;
    }
    return true;
  }

}
