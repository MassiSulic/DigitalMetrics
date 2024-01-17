import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SendEmailComponent } from './send-email.component';
import { LoginGuard } from '../../guards/login.guard';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SendEmailComponent, canActivate:[LoginGuard]}
    ])],
    exports: [RouterModule]
})
export class SendEmailRoutingModule { }
