import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { ReportesService } from '../services/reportes.service';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../models/usuario';
import { TokenService } from '../auth/services/token.service';
import { Informe } from '../models/informe';
import { InformesService } from '../services/informes.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    reportUrl: string;

    usuarioLogueado: Usuario;
    informesMenu: any[]
    userName: string;

    informes: Informe[] = []


    isLogged = false;
    isAdmin = false;

    constructor(
      public layoutService: LayoutService,
      private reportService: ReportesService,
      private usuariosService: UsuariosService,
      private tokenService: TokenService,
      private informesService: InformesService,
      ) { }
    updateUrl(url: string) {
      this.reportService.updateReportUrl(url);
    }

    onLogOut(): void {
      this.tokenService.logOut();
    }

    async ngOnInit() {
      this.userName = this.tokenService.getUserName();
      this.isLogged = this.tokenService.isLogged();
      this.isAdmin = this.tokenService.isAdmin();

      if (this.isAdmin) {
        this.informes = await this.informesService.get().toPromise();
      }else{
        this.usuarioLogueado = await this.usuariosService.getByUserName(this.userName).toPromise();
        this.informes = this.usuarioLogueado.informes;
      }

      const informesMenuByEmpresa = this.informes.reduce((acc, informe) => {
        const empresaId = informe.empresa ? informe.empresa.nombre : 'Sin empresa';

        if (!acc[empresaId]) {
          acc[empresaId] = {
            label: empresaId,
            items: []
          };
        }

        const empresaItem = acc[empresaId];
        empresaItem.items.push({
          label: informe.nombre,
          icon: 'pi pi-fw pi-book',
          command: () => this.updateUrl(informe.link),
          routerLink: ['/informes/' + empresaId + "/" + informe.nombre]
        });

        return acc;
      }, {});

      this.informesMenu = Object.values(informesMenuByEmpresa);



      this.model = [
        {
          label: 'Home',
          items: [
            { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/inicio'] },
            { label: 'Área de Capacitaciones', icon: 'pi pi-book', url: 'https://drive.google.com/drive/folders/1JIuzWJQQTXxlqkbrYuu49Z2L0t0QhX6d?usp=drive_link', target: '_blank' },
            { label: 'Reportes', icon: 'pi pi-chart-bar', items: this.informesMenu },
          ]
        },
        ...(this.isAdmin ? [
          {
            label: 'Administración',
            items: [
              { label: 'Usuarios', icon: 'pi pi-fw pi-user', routerLink: ['/usuarios'] },
              { label: 'Informes', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/informes_admin'] },
              { label: 'Empresas', icon: 'pi pi-fw pi-sitemap', routerLink: ['/empresas'] },
              { label: 'Departamentos', icon: 'pi pi-fw pi-building', routerLink: ['/departamentos'] }
            ]
          }
        ] : [])
      ];
    }
}
