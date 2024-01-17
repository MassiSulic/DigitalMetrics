import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { Router } from '@angular/router';
import { TokenService } from '../auth/services/token.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, private tokenService: TokenService) {
      this.items = [
        {
            label: 'Mi Perfil',
            icon: 'pi pi-user',

        },
        { label: 'Configuración', icon: 'pi pi-cog' },
        { label: 'Ayuda', icon: 'pi-info-circle', url: 'https://inusual.com.ar/' },
        { separator: true },
        {
          label: 'Cerrar Sesión',
          icon: 'pi pi-fw pi-power-off',
          command: () => {
              this.cerrarSesion();
          }
      }
    ];
    }

    cerrarSesion(){
      this.tokenService.logOut();
    }
}
