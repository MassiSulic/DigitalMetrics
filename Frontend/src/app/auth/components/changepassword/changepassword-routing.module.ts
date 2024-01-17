import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './changepassword.component';
import { LoginGuard } from '../../guards/login.guard';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ChangePasswordComponent, canActivate:[LoginGuard]}
    ])],
    exports: [RouterModule]
})
export class ChangePasswordRoutingModule { }
