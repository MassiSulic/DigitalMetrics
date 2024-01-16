import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DepartamentosComponent } from './departamentos.component';
import { ProdGuardService } from 'src/app/auth/guards/prod-guard.service';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: DepartamentosComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin']}},

	])],
	exports: [RouterModule]
})
export class DepartamentosRoutingModule { }
