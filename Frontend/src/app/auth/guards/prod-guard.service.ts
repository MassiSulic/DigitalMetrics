import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
//  Guarda usada para comprobar que el usuario esté autorizado a acceder a recursos.
//  Contrasta sus roles con los expectedRoles de la ruta. Si los cumple se lo deja navegar, sino se lo
// redirige a Home
export class ProdGuardService implements CanActivate {

  realRol: string;

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //console.log("prodguar")
    //console.log("Admin? "+this.tokenService.isAdmin())
    const expectedRol = route.data.expectedRol;
    this.realRol = this.tokenService.isAdmin() ? 'admin' : 'user';
    if (!this.tokenService.isLogged()){
      this.router.navigate(['/auth/login']);
      return false;
    }else if(expectedRol.indexOf(this.realRol) < 0){
      this.router.navigate(['/inicio']);
      return false;
    }else{
      return true;
    }

  }
}
