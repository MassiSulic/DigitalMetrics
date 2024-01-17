import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TokenService } from 'src/app/auth/services/token.service';
import { Departamento } from 'src/app/models/departamento';
import { Empresa } from 'src/app/models/empresa';
import { Informe } from 'src/app/models/informe';
import { Usuario } from 'src/app/models/usuario';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { EmpresasService } from 'src/app/services/empresas.service';
import { InformesService } from 'src/app/services/informes.service';
import { ReportesService } from 'src/app/services/reportes.service';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-usuarios-permisos',
  templateUrl: './usuarios-permisos.component.html',
  styleUrls: ['./usuarios-permisos.component.css'],
  providers: [MessageService]

})
export class UsuarioPermisosComponent implements OnInit{
  informes: any[] = []; // Todos los informes del sistema
  informesAcceso: any[] = []; // Informes a los que tiene acceso el usuario
  formInformes: FormGroup; // Formulario dinámico

  usuarioId:number;
  usuario:Usuario = null;
  sourceProducts: Informe[];
  targetProducts: Informe[];



  constructor(
    private tokenService: TokenService,
    private usuarioService: UsuariosService,
    private authService: AuthService,
    private informesService: InformesService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    )
     {}

     async ngOnInit(): Promise<void> {
      await this.ObtenerIdUsuario();
      await this.ObtenerUsuarioPorId();
      await this.ObtenerInformes();
    }
    // ngOnInit() {
    //  this.GetInformesAcceso();
    // }




  GetInformes(){
    this.informesService.get().subscribe((data:Informe[]) => {
      this.sourceProducts = [];
      data.forEach(informe =>{
        informe.empresaNombre=informe.empresa?.nombre;
        informe.departamentoNombre=informe.departamento?.nombre;

      })
      this.sourceProducts = data;
      this.sourceProducts = this.filtrarInformes(this.sourceProducts, this.targetProducts);

    });
  }




  async ObtenerIdUsuario(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.activatedRoute.params.subscribe(params => {
        this.usuarioId = +params['usuarioId'];
        resolve();
      });
    });
  }

  async ObtenerUsuarioPorId(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.usuarioService.getById(this.usuarioId).subscribe((data: Usuario) => {
        this.usuario = data;
        //console.log(data);
        const informesAcceso = this.usuario.informes;
        informesAcceso.forEach(informe => {
          informe.empresaNombre = informe.empresa?.nombre;
          informe.departamentoNombre = informe.departamento?.nombre;
        });

        this.targetProducts = informesAcceso;

        //console.log(this.targetProducts);

        resolve();
      });
    });
  }

  async ObtenerInformes(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.informesService.get().subscribe((data: Informe[]) => {
        this.sourceProducts = [];
        data.forEach(informe => {
          informe.empresaNombre = informe.empresa?.nombre;
          informe.departamentoNombre = informe.departamento?.nombre;
        });
        this.sourceProducts = data;
        this.sourceProducts = this.filtrarInformes(this.sourceProducts, this.targetProducts);

        resolve();
      });
    });
  }

  filtrarInformes(sourceInformes: Informe[], targetInformes: Informe[]): Informe[] {
    return sourceInformes.filter((informe) => !targetInformes.some((targetInforme) => informe.id === targetInforme.id));
  }

  actualizarInformes(){
    this.usuario.informes = this.targetProducts;
    this.authService.actualizarInformes(this.usuario).subscribe((data:Usuario) => {
      this.messageService.add({ severity: 'success', summary: 'Procedimiento Exitoso', detail: 'Permisos actualizados ', life: 5000 });
    });
  }


  GetInformesAcceso(){
    this.activatedRoute.params.subscribe(params => {
      this.usuarioId = +params['usuarioId']; // (+) converts string 'id' to a number
    })

    this.usuarioService.getById(this.usuarioId).subscribe((data:Usuario) => {
      this.usuario = data;
      //console.log(data)
       const informesAcceso = this.usuario.informes;
       informesAcceso.forEach(informe =>{
           informe.empresaNombre=informe.empresa?.nombre;
           informe.departamentoNombre=informe.departamento?.nombre;
         })

       this.targetProducts = informesAcceso;

       //console.log(this.targetProducts)


       this.informesService.get().subscribe((data:Informe[]) => {
        this.sourceProducts = [];
        data.forEach(informe =>{
          informe.empresaNombre=informe.empresa?.nombre;
          informe.departamentoNombre=informe.departamento?.nombre;

        })
        this.sourceProducts = data;
        this.sourceProducts = this.filtrarInformes(this.sourceProducts, this.targetProducts);

      });
     });
  }




}
