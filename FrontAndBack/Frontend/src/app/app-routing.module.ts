import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { InicioComponent } from './components/inicio/inicio.component';
import { EmptyDemoComponent } from './demo/components/pages/empty/emptydemo.component';
import { ProdGuardService } from './auth/guards/prod-guard.service';

@NgModule({
    imports: [
      RouterModule.forRoot(
      [
        { path: '', component: AppLayoutComponent,
          children: [
            { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
            { path: 'inicio', component: InicioComponent, canActivate:[ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
            { path: 'usuarios', loadChildren: () => import('./components/usuarios/usuarios.module').then(m => m.UsuarioModule) },
            { path: 'informes/:idEmpres/:informeId', loadChildren: () => import('../app/components/informes/informes.module').then(m => m.InformesModule) },
            { path: 'informes_admin', loadChildren: () => import('../app/components/informes-admin/informes-admin.module').then(m => m.InformesAdminModule) },
            { path: 'empresas', loadChildren: () => import('../app/components/empresas/empresas.module').then(m => m.EmpresasModule) },
            { path: 'departamentos', loadChildren: () => import('../app/components/departamentos/departamentos.module').then(m => m.DepartamentosModule) },

            { path: 'pages/empty', component: EmptyDemoComponent },
            //{ path: '**', redirectTo: '/login', pathMatch: 'full' },
          ]
        },
        { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
        { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
        { path: 'notfound', component: NotfoundComponent },
        { path: '**', redirectTo: '/notfound' }
      ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
