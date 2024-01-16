import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmpresasComponent } from './empresas.component';
import { ProdGuardService } from 'src/app/auth/guards/prod-guard.service';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: EmpresasComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin']}},

	])],
	exports: [RouterModule]
})
export class EmpresasRoutingModule { }
