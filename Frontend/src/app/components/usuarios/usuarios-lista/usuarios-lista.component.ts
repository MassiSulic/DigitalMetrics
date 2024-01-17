import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Departamento } from 'src/app/models/departamento';
import { Empresa } from 'src/app/models/empresa';
import { Usuario } from 'src/app/models/usuario';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { EmpresasService } from 'src/app/services/empresas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css'],
  providers: [MessageService]
})
  export class UsuariosListaComponent {
  deleteUsuarioDialog: boolean = false;

  deleteUsuariosDialog: boolean = false;

  usuarios: Usuario[] = [];

  selectedUsuarios: Usuario[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  rowsPerPageOptions = [5, 10, 20];

  usuarioDialog: boolean = false;
  usuarioDialogEdit: boolean = false;

  usuario: Usuario = {} as Usuario;
  empresas: Empresa[] = [];
  departamentos: Departamento[] = [];
  formUsuario: FormGroup ;
  formUsuarioEdit: FormGroup ;
  Titulo = 'Usuarios';
  departamentosFiltrados:Departamento[] = []

  dropDownDepartamentosDisabled: boolean = true;
  selectedEmpresa: Empresa;

  constructor(
    private usuariosService: UsuariosService,
  // public dialog: MatDialog,
    private empresasService: EmpresasService,
    private departamentosService: DepartamentosService,
    private messageService: MessageService,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.formUsuario = this.formBuilder.group({
      id: new FormControl(0, [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      nombreUsuario: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      puesto: new FormControl(''),
      empresa: new FormControl(null),
      departamentos: new FormControl(null),
      password: new FormControl('', [Validators.required]),
    });
    this.formUsuarioEdit = this.formBuilder.group({
      id: new FormControl(0, [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      nombreUsuario: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      puesto: new FormControl(''),
      empresa: new FormControl(null),
      departamentos: new FormControl(null),
    });
    this.cargarCols();
    this.GetUsuarios();
    this.GetEmpresas();
    this.GetDepartamentos();
  }

  GetUsuarios(){
    this.usuariosService.get().subscribe((data:Usuario[]) => {
      data.forEach(usuario => {
        usuario.empresaNombre = usuario.empresa?.nombre;
        usuario.departamentoNombre = usuario.departamentos[0]?.nombre;
      })
      this.usuarios = data;
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
      { field: 'nombreUsuario', header: 'Usuario' },
      { field: 'email', header: 'Email' },
      { field: 'empresaNombre', header: 'Empresa' },
      { field: 'departamentoNombre', header: 'Departamento' },
      { field: 'puesto', header: 'Puesto' },
  ];
  }


  saveUsuario() {
      this.submitted = true;
      if (this.formUsuario.valid) {
        this.usuario = {...this.formUsuario.value};

          // Aca enviamos el plan al servicio cuando este creado
          this.usuarioDialog = false;
          if(this.usuario.departamentos != null){
            this.usuario.departamentos = [];
            this.usuario.departamentos.push(this.formUsuario.controls['departamentos'].value)
          } else{
            this.usuario.departamentos = [];
          }
          //console.log(this.usuario);

            this.authService.nuevo(this.usuario).subscribe((res: Usuario)=>{
            this.messageService.add({ severity: 'success', summary: 'Procedimiento Exitoso', detail: 'Usuario creado ', life: 5000 });
            this.usuario.empresaNombre = this.usuario.empresa?.nombre;
            this.usuario.departamentoNombre = this.usuario.departamentos[0]?.nombre;
            this.usuarios.push(this.usuario);
            this.resetDialogsAgregar();
          })

      }else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Por favor revise los datos ingresados' });
      }
    }

    editarUsuario() {
      this.submitted = true;
      if (this.formUsuarioEdit.valid) {
        this.usuario = {...this.formUsuarioEdit.value};

        if(this.usuario.departamentos != null){
          this.usuario.departamentos = [];
          this.usuario.departamentos.push(this.formUsuarioEdit.controls['departamentos'].value)
        } else{
          this.usuario.departamentos = [];
        }
        //console.log(this.usuario);
        // Aca enviamos el plan al servicio cuando este editado
        this.usuarioDialogEdit = false;
           this.authService.editar(this.usuario).subscribe((res: Usuario)=>{
            this.usuario.empresaNombre = this.usuario.empresa?.nombre;
            this.usuario.departamentoNombre =this.usuario.departamentos[0]?.nombre;
             this.usuarios[this.findIndexById(this.usuario.id)] = this.usuario;
             //console.log(this.usuarios[2])
             this.messageService.add({ severity: 'success', summary: 'Procedimiento Exitoso', detail: 'Usuario modificado ', life: 5000 });
             this.resetDialogsEdit();
           })

      }else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Por favor revise los datos ingresados' });
      }
    }

  resetDialogsAgregar(){
      this.usuarios = [...this.usuarios];
      this.usuarioDialog = false;
      this.usuario = {
        id: 0,
        nombre: '',
        nombreUsuario: '',
        email: '',
        password: '',
        empresa: null,
        departamentos: null,
        empresaNombre: '',
        departamentoNombre: '',
      }
      this.dropDownDepartamentosDisabled = true;
      this.formUsuario = this.formBuilder.group({
        id: new FormControl(0, [Validators.required]),
        nombre: new FormControl('', [Validators.required]),
        nombreUsuario: new FormControl('', [Validators.required]),
        puesto: new FormControl(''),
        email: new FormControl('', [Validators.required]),
        empresa: new FormControl(null),
        departamentos: new FormControl(null),
        password: new FormControl('', [Validators.required]),
      });
    }

    resetDialogsEdit(){
      // this.usuarios = [...this.usuarios];
      // this.usuarioDialog = false;
      this.usuarioDialogEdit = false;
      this.usuario = {
        id: 0,
        nombre: '',
        nombreUsuario: '',
        email: '',
        password: '',
        empresa: null,
        departamentos: null,
        empresaNombre: '',
        departamentoNombre: '',
      }
      this.dropDownDepartamentosDisabled = true;
      this.formUsuarioEdit = this.formBuilder.group({
        id: new FormControl(0, [Validators.required]),
        nombre: new FormControl('', [Validators.required]),
        nombreUsuario: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        puesto: new FormControl(''),
        empresa: new FormControl(null),
        departamentos: new FormControl(null),
      });
    }

  openNew() {
    this.usuario = {
      id: 0,
      nombre: '',
      nombreUsuario: '',
      email: '',
      password: '',
      empresa: null,
      departamentos: null,
      empresaNombre: '',
      departamentoNombre: '',
    }
    this.dropDownDepartamentosDisabled = true;
    this.formUsuario = this.formBuilder.group({
      id: new FormControl(0, [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      nombreUsuario: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      puesto: new FormControl(''),
      empresa: new FormControl(null),
      departamentos: new FormControl(null),
      password: new FormControl('', [Validators.required]),
    });
    this.submitted = false;
    this.usuarioDialog = true;
    this.formUsuario.get('departamentos').disable();
  }

  hideDialog() {
    this.usuarioDialog = false;
    this.submitted = false;
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.usuarios.length; i++) {
        if (this.usuarios[i].id === id) {
            index = i;
            break;
        }
    }
    //console.log("INDEX:" + index)
    return index;
  }

  // GetEmpresaNombreById(Id: number) {
  //   var Nombre = this.empresas.find((x) => x.value === Id);
  //   return Nombre;
  // }
  // GetDepartamentoNombreById(Id: number) {
  //   var Nombre = this.departamentos.find((x) => x.value === Id);
  //   return Nombre;
  // }


  editUsuario(usuario: Usuario) {
    this.usuario = { ...usuario };
    this.formUsuarioEdit = this.formBuilder.group({
      id: new FormControl(usuario.id, [Validators.required]),
      nombre: new FormControl(usuario.nombre, [Validators.required]),
      nombreUsuario: new FormControl(usuario.nombreUsuario, [Validators.required]),
      email: new FormControl(usuario.email, [Validators.required]),
      puesto: new FormControl(usuario?.puesto),
      empresa: new FormControl(usuario?.empresa),
      departamentos: new FormControl(usuario?.departamentos[0]),
    });
    this.usuarioDialogEdit = true;
    if(this.formUsuarioEdit.controls['empresa'].value == null){
      this.formUsuarioEdit.get('departamentos').disable();
    }
  }



  filtrarDropBoxDepartamentos(evento: any) {
    if(evento.value != null){
      this.departamentosFiltrados = this.filterDepartamentosByEmpresa(evento.value)
      this.dropDownDepartamentosDisabled = false;
      this.formUsuarioEdit.get('departamentos').enable();
      this.formUsuario.get('departamentos').enable();
    }else{
      this.formUsuarioEdit.get('departamentos').disable();
      this.formUsuario.get('departamentos').disable();
      this.formUsuarioEdit.controls['departamentos'].patchValue(null)
      this.formUsuario.controls['departamentos'].patchValue([])
      //console.log(this.formUsuario.controls['departamento'])
    }
  }

  filterDepartamentosByEmpresa(empresa: Empresa): Departamento[] {
    return this.departamentos.filter((departamento: Departamento) => departamento.empresa.id === empresa.id);
  }



  deleteSelectedProducts() {
    this.deleteUsuariosDialog = true;
}



  deleteProduct(usuario: Usuario) {
      this.deleteUsuarioDialog = true;
      this.usuario = { ...usuario };
  }


  confirmDeleteSelected() {
    this.deleteUsuariosDialog = false;
    this.usuariosService.deleteAll(this.selectedUsuarios).subscribe((res)=>{
      this.usuarios = this.usuarios.filter(val => !this.selectedUsuarios.includes(val));
      this.messageService.add({severity: 'success', summary: 'Procedimiento Exitoso', detail: 'Usuarios Eliminados', life: 5000 });
      this.selectedUsuarios = [];
    })
  }
  confirmDelete() {

    this.usuariosService.delete(this.usuario).subscribe((res) => {
      this.deleteUsuarioDialog = false;
      this.usuarios = this.usuarios.filter((informe) => informe.id !== this.usuario.id)
      this.usuario = {
        id: 0,
        nombre: '',
        nombreUsuario: '',
        email: '',
        password: '',
        empresa: null,
        departamentos: null,
        empresaNombre: '',
        departamentoNombre: '',
      }
      this.messageService.add({severity: 'success', summary: 'Procedimiento Exitoso', detail: 'Usuario Eliminado', life: 5000 });

    })

  }

}
