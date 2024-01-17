import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
        { path: 'access', loadChildren: () => import('./components/access/access.module').then(m => m.AccessModule) },
        { path: 'error', loadChildren: () => import('./components/error/error.module').then(m => m.ErrorModule) },
        { path: 'registro', loadChildren: () => import('./components/registro/registro.module').then(m => m.RegistroModule) },
        { path: 'change-password/:tokenPassword', loadChildren: () => import('./components/changepassword/changepassword.module').then(m => m.ChangePasswordModule) },
        { path: 'sendemail', loadChildren: () => import('./components/sendmail/send-email.module').then(m => m.SendEmailModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
