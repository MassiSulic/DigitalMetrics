import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Empresa } from 'src/app/models/empresa';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css'],
  providers: [MessageService]
})
export class EmpresasComponent {
  deleteEmpresaDialog: boolean = false;

  deleteEmpresasDialog: boolean = false;

  empresas: Empresa[] = [];

  selectedEmpresas: Empresa[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  rowsPerPageOptions = [5, 10, 20];

  empresaDialog: boolean = false;

  empresa: Empresa = {} as Empresa;

  departamentos: any[] = [];

  formEmpresa: FormGroup = {} as FormGroup;

Titulo = 'empresas';

constructor(
  private empresasService: EmpresasService,
 // public dialog: MatDialog,
  private messageService: MessageService,
  private router: Router,
  private formBuilder: FormBuilder
) { }

ngOnInit(): void {
  this.formEmpresa = this.formBuilder.group({
    id: new FormControl(0, [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
  });
  this.cargarCols();
  this.GetEmpresas();
}

GetEmpresas(){
  this.empresasService.get().subscribe((data:Empresa[]) => {
    this.empresas = data;
  });
 }

 onGlobalFilter(table: Table, event: Event) {
  table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

cargarCols(){
  this.cols = [
    { field: 'id', header: '#' },
    { field: 'nombre', header: 'Nombre' },
];
}


saveEmpresa() {
    this.submitted = true;
    if (this.formEmpresa.valid) {
      this.empresa = {...this.formEmpresa.value};
      //console.log(this.empresa);

      if(this.empresa.id != 0){
        // Aca enviamos el plan al servicio cuando este editado
        this.empresasService.put(this.empresa).subscribe((res: Empresa)=>{
          this.empresas[this.findIndexById(this.empresa.id)] = res;
          this.messageService.add({ severity: 'success', summary: 'Procedimiento Exitoso', detail: 'Empresa modificada ', life: 5000 });
          this.resetDialogs();
        })        
      }else{
        // Aca enviamos el plan al servicio cuando este creado
        this.empresasService.post(this.empresa).subscribe((res: Empresa)=>{
          this.messageService.add({ severity: 'success', summary: 'Procedimiento Exitoso', detail: 'Empresa creada ', life: 5000 });
          this.resetDialogs();
          this.empresas.push(res);
        })
      }
    }else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Por favor revise los datos ingresados' });
    }
  }

resetDialogs(){
    this.empresas = [...this.empresas];
    this.empresaDialog = false;
     this.empresa = {
       id: 0,
       nombre: '',
     }
    this.formEmpresa = this.formBuilder.group({
      id: new FormControl(0, [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
    });
  }

openNew() {
  this.empresa = {
    id: 0,
    nombre: '',
  };
  this.formEmpresa = this.formBuilder.group({
    id: new FormControl(0, [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
  });
  this.submitted = false;
  this.empresaDialog = true;
}

hideDialog() {
  this.empresaDialog = false;
  this.submitted = false;
}

findIndexById(id: number): number {
  let index = -1;
  for (let i = 0; i < this.empresas.length; i++) {
      if (this.empresas[i].id === id) {
          index = i;
          break;
      }
  }

  return index;
}

editEmpresa(empresa: Empresa) {
  this.empresa = { ...empresa };
  this.formEmpresa = this.formBuilder.group({
    id: new FormControl(empresa.id, [Validators.required]),
    nombre: new FormControl(empresa.nombre, [Validators.required]),
  });
  this.empresaDialog = true;
}
}
