import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InformesAdminComponent } from './informes-admin.component';
import { ProdGuardService } from 'src/app/auth/guards/prod-guard.service';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: InformesAdminComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin'] }},

	])],
	exports: [RouterModule]
})
export class InformesAdminRoutingModule { }
