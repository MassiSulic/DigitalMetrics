import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuarioPermisosComponent } from './usuarios-permisos.component';
import { ProdGuardService } from 'src/app/auth/guards/prod-guard.service';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: UsuarioPermisosComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] }},

	])],
	exports: [RouterModule]
})
export class UsuarioPermisosRoutingModule { }
