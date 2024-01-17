import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', redirectTo: '/usuarios/lista', pathMatch: 'full' },
        { path: 'lista', loadChildren: () => import('./usuarios-lista/usuarios-lista.module').then(m => m.UsuarioListaModule) },
        { path: 'permisos/:usuarioId', loadChildren: () => import('./usuarios-permisos/usuarios-permisos.module').then(m => m.UsuarioPermisosModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class UsuarioRoutingModule { }
