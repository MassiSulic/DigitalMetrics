import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { LoginGuard } from 'src/app/auth/guards/login.guard';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: LandingComponent }
    ])],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
