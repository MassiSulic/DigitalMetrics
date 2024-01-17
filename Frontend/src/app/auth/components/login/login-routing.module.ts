import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginGuard } from '../../guards/login.guard';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: LoginComponent, canActivate:[LoginGuard]}
    ])],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
