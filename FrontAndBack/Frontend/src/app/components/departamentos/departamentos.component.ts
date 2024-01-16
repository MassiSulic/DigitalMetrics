import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Departamento } from 'src/app/models/departamento';
import { Empresa } from 'src/app/models/empresa';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css'],
  providers: [MessageService]
})
export class DepartamentosComponent {
  deleteDepartamentoDialog: boolean = false;

  deleteDepartamentosDialog: boolean = false;

  departamentos: Departamento[] = [];

  selectedDepartamentos: Departamento[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  rowsPerPageOptions = [5, 10, 20];

  departamentoDialog: boolean = false;

  departamento: Departamento = {} as Departamento;

  empresas: Empresa[] = [];

  formDepartamento: FormGroup = {} as FormGroup;

Titulo = 'departamentos';

constructor(
  private departamentosService: DepartamentosService,
  private empresasService: EmpresasService,
 // public dialog: MatDialog,
  private messageService: MessageService,
  private router: Router,
  private formBuilder: FormBuilder
) { }

ngOnInit(): void {
  this.formDepartamento = this.formBuilder.group({
    id: new FormControl(0, [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    empresa: new FormControl('', [Validators.required]),
    departamentoPadre: new FormControl(''),
  });
  this.cargarCols();
  this.GetDepartamentos();
  this.GetEmpresas();
}

GetDepartamentos(){
  this.departamentosService.get().subscribe((data:Departamento[]) => {
    this.departamentos = data;
  });
 }

 GetEmpresas(){
  this.empresasService.get().subscribe((data:Empresa[]) => {
    data.forEach(element => {
      this.empresas.push({nombre: element.nombre, id: element.id})
    });
    //this.empresas = data;
  });
 }

 onGlobalFilter(table: Table, event: Event) {
  table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

cargarCols(){
  this.cols = [
    { field: 'id', header: '#' },
    { field: 'nombre', header: 'Nombre' },
    { field: 'empresa', header: 'Empresa' },
    { field: 'departamentoPadre', header: 'Departamento padre' },
];
}


saveDepartamento() {
    this.submitted = true;
    if (this.formDepartamento.valid) {
      this.departamento = {...this.formDepartamento.value};
      //console.log(this.departamento);

      if(this.departamento.id != 0){
        // Aca enviamos el plan al servicio cuando este editado
        this.departamentosService.put(this.departamento).subscribe((res: Departamento)=>{
          this.departamentos[this.findIndexById(this.departamento.id)] = res;
          this.messageService.add({ severity: 'success', summary: 'Procedimiento Exitoso', detail: 'Departamento modificado ', life: 5000 });
          this.resetDialogs();
        })        
      }else{
        // Aca enviamos el plan al servicio cuando este creado
        this.departamentosService.post(this.departamento).subscribe((res: Departamento)=>{
          this.messageService.add({ severity: 'success', summary: 'Procedimiento Exitoso', detail: 'Departamento creado ', life: 5000 });
          this.resetDialogs();
          this.departamentos.push(res);
        })
      }
    }else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Por favor revise los datos ingresados' });
    }
  }

resetDialogs(){
    this.departamentos = [...this.departamentos];
    this.departamentoDialog = false;
     this.departamento = {
       id: 0,
       nombre: '',
       empresa: null,
       departamentoPadre: null
     }
    this.formDepartamento = this.formBuilder.group({
      id: new FormControl(0, [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      empresa: new FormControl(null, [Validators.required]),
      departamentoPadre: new FormControl(null),
    });
  }

openNew() {
  this.departamento = {
    id: 0,
    nombre: '',
    empresa: null,
    departamentoPadre: null
  }
 this.formDepartamento = this.formBuilder.group({
   id: new FormControl(0, [Validators.required]),
   nombre: new FormControl('', [Validators.required]),
   empresa: new FormControl(null, [Validators.required]),
   departamentoPadre: new FormControl(null),
 });
  this.submitted = false;
  this.departamentoDialog = true;
}

hideDialog() {
  this.departamentoDialog = false;
  this.submitted = false;
}

findIndexById(id: number): number {
  let index = -1;
  for (let i = 0; i < this.departamentos.length; i++) {
      if (this.departamentos[i].id === id) {
          index = i;
          break;
      }
  }

  return index;
}

editDepartamento(departamento: Departamento) {
  this.departamento = { ...departamento };
  this.formDepartamento = this.formBuilder.group({
    id: new FormControl(departamento.id, [Validators.required]),
    nombre: new FormControl(departamento.nombre, [Validators.required]),
    empresa: new FormControl(departamento.empresa, [Validators.required]),
    departamentoPadre: new FormControl(departamento.departamentoPadre),
  });
  this.departamentoDialog = true;
}
}
