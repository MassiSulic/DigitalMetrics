import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InformesComponent } from './informes.component';
import { ProdGuardService } from 'src/app/auth/guards/prod-guard.service';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: InformesComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] }},

	])],
	exports: [RouterModule]
})
export class InformesRoutingModule { }
