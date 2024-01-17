import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuariosListaComponent } from './usuarios-lista.component';
import { ProdGuardService } from 'src/app/auth/guards/prod-guard.service';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: UsuariosListaComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] }},

	])],
	exports: [RouterModule]
})
export class UsuariosListaRoutingModule { }
