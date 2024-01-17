import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Departamento } from 'src/app/models/departamento';
import { Empresa } from 'src/app/models/empresa';
import { Informe } from 'src/app/models/informe';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { EmpresasService } from 'src/app/services/empresas.service';
import { InformesService } from 'src/app/services/informes.service';
import { ReportesService } from 'src/app/services/reportes.service';

@Component({
  selector: 'app-informes-admin',
  templateUrl: './informes-admin.component.html',
  styleUrls: ['./informes-admin.component.css'],
  providers: [MessageService]
})
export class InformesAdminComponent {
  deleteInformeDialog: boolean = false;

  deleteInformesDialog: boolean = false;

  informes: Informe[] = [];

  selectedInformes: Informe[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  rowsPerPageOptions = [5, 10, 20];

  informeDialog: boolean = false;

  informe: Informe = {} as Informe;
  empresas: Empresa[] = [];
  departamentos: Departamento[] = [];
  formInforme: FormGroup = {} as FormGroup;
  Titulo = 'Informes';
  departamentosFiltrados:Departamento[] = []

  constructor(
    private informesService: InformesService,
    private empresasService: EmpresasService,
    private departamentosService: DepartamentosService,
    private messageService: MessageService,
    private router: Router,
    private formBuilder: FormBuilder,
    private reportService: ReportesService
  ) { }

  ngOnInit(): void {
    this.formInforme = this.formBuilder.group({
      id: new FormControl(0, [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required]),
      empresa: new FormControl(null),
      departamento: new FormControl(null),
    });
    this.cargarCols();
    this.GetInformes();
    this.GetEmpresas();
    this.GetDepartamentos();
  }

  GetInformes(){
    this.informesService.get().subscribe((data:Informe[]) => {
      this.informes = data;
      this.informes.forEach(informe =>{
        informe.empresaNombre=informe.empresa?.nombre;
        informe.departamentoNombre=informe.departamento?.nombre;
      })

    });
  }

  GetEmpresas(){
    this.empresasService.get().subscribe((data:Empresa[]) => {
      this.empresas = data;
    });
  }
  GetDepartamentos(){
    this.departamentosService.get().subscribe((data:Departamento[]) => {
      this.departamentos = data;
      this.departamentosFiltrados = data;
    });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

  cargarCols(){
    this.cols = [
      { field: 'id', header: '#' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'empresaNombre', header: 'Empresa' },
      { field: 'departamentoNombre', header: 'Departamento' },
      { field: 'link', header: 'Link' },
  ];
  }


  saveInforme() {
      this.submitted = true;
      this.informeDialog = false;
      if (this.formInforme.valid) {
        this.informe = {...this.formInforme.value};
        //console.log(this.informe);

        if(this.informe.id != 0){
          // Aca enviamos el plan al servicio cuando este editado
          this.informesService.put(this.informe).subscribe((res: Informe)=>{
            res.empresaNombre = res.empresa?.nombre;
            res.departamentoNombre = res.departamento?.nombre;
            this.informes[this.findIndexById(this.informe.id)] = res;
            this.messageService.add({ severity: 'success', summary: 'Procedimiento Exitoso', detail: 'Informe modificado ', life: 5000 });
            this.resetDialogs();
          })
        }else{
          // Aca enviamos el plan al servicio cuando este creado
          this.informesService.post(this.informe).subscribe((res: Informe)=>{
            this.messageService.add({ severity: 'success', summary: 'Procedimiento Exitoso', detail: 'Informe creado ', life: 5000 });
            this.resetDialogs();
            res.empresaNombre = res.empresa?.nombre;
            res.departamentoNombre = res.departamento?.nombre;
            this.informes.push(res);
          })
        }
      }else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Por favor revise los datos ingresados' });
      }
    }

  resetDialogs(){
      this.informes = [...this.informes];
      this.informeDialog = false;
      this.informe = {
        id: 0,
        nombre: '',
        link: '',
        empresa: null,
        departamento: null,
        empresaNombre: '',
        departamentoNombre: '',
      }
      this.formInforme = this.formBuilder.group({
        id: new FormControl(0, [Validators.required]),
        nombre: new FormControl('', [Validators.required]),
        link: new FormControl('', [Validators.required]),
        empresa: new FormControl(''),
        departamento: new FormControl(''),
      });
    }

  openNew() {
    this.informe = {
      id: 0,
        nombre: '',
        link: '',
        empresa: null,
        departamento: null,
        empresaNombre: '',
        departamentoNombre: '',
    };
    this.submitted = false;
    this.informeDialog = true;
  }

  hideDialog() {
    this.informeDialog = false;
    this.submitted = false;
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.informes.length; i++) {
        if (this.informes[i].id === id) {
            index = i;
            break;
        }
    }

    return index;
  }

  // GetEmpresaNombreById(Id: number) {
  //   var Nombre = this.empresas.find((x) => x.id === Id);
  //   return Nombre;
  // }
  // GetDepartamentoNombreById(Id: number) {
  //   var Nombre = this.departamentos.find((x) => x.value === Id);
  //   return Nombre;
  // }


  editInforme(informe: Informe) {
    this.informe = { ...informe };
    this.formInforme = this.formBuilder.group({
      id: new FormControl(informe.id, [Validators.required]),
      nombre: new FormControl(informe.nombre, [Validators.required]),
      link: new FormControl(informe.link, [Validators.required]),
      empresa: new FormControl(informe.empresa),
      departamento: new FormControl(informe.departamento),
    });
    this.informeDialog = true;
  }

  updateUrl(informe: Informe) {
    this.reportService.updateReportUrl(informe.link);
    this.router.navigate(["/informes/" + informe.empresa.nombre + "/" + informe.nombre])
  }

  filtrarDropBoxDepartamentos(evento: any) {
    this.departamentosFiltrados = this.filterDepartamentosByEmpresa(evento.value)

  }

  filterDepartamentosByEmpresa(empresa: Empresa): Departamento[] {
    return this.departamentos.filter((departamento: Departamento) => departamento.empresa.id === empresa.id);
  }



  deleteSelectedProducts() {
    this.deleteInformesDialog = true;
}



  deleteProduct(product: Informe) {
      this.deleteInformeDialog = true;
      this.informe = { ...product };
  }


  confirmDeleteSelected() {
    this.deleteInformesDialog = false;
    this.informesService.deleteAll(this.selectedInformes).subscribe((res)=>{
      this.informes = this.informes.filter(val => !this.selectedInformes.includes(val));
      this.messageService.add({severity: 'success', summary: 'Procedimiento Exitoso', detail: 'Informes Eliminados', life: 5000 });
      this.selectedInformes = [];
    })
  }
  confirmDelete() {

    this.informesService.delete(this.informe).subscribe((res) => {
      this.deleteInformeDialog = false;
      this.informes = this.informes.filter((informe) => informe.id !== this.informe.id)
      this.informe = {
        id: 0,
        nombre: '',
        link: '',
        empresa: null,
        departamento: null,
        empresaNombre: '',
        departamentoNombre: '',
      }
      this.messageService.add({severity: 'success', summary: 'Procedimiento Exitoso', detail: 'Informe Eliminado', life: 5000 });

    })

}



}
