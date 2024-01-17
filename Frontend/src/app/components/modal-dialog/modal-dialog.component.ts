import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css'],

})
export class ModalDialogComponent implements OnInit {
  titulo = '';
  texto = '';
  textoBotonTrue = '';
  textoBotonFalse = '';
  bloquearPantalla = false;
  classHeader = 'bg-success';
  classBody = 'bg-success';
  faIcon = 'far fa-check-circle';
  mensaje = '';
  styleClass=''

  ngOnInit(): void {}
  constructor(public activeModal: NgbActiveModal) {
    this.bloquearPantalla = false;
  }
  // cerrar() {
  //     this.activeModal.close();
  // }
  setTipo(tipo: string = 's') {
    tipo = tipo.toLowerCase();
    switch (tipo) {
      case 's':
        this.classHeader = 'bg-success';
        this.faIcon = 'fa fa-check-circle-o';
        break;
      case 'd':
        this.classHeader = 'bg-danger';
        this.faIcon = 'fa fa-exclamation-triangle';
        this.classBody = 'bg-danger'
        this.styleClass = 'background-color: #cd1f1f'
        break;
      case 'i':
        this.classHeader = 'bg-info';
        this.faIcon = 'fa fa-info-circle';
        this.classBody = 'bg-info'
        this.styleClass = 'background-color: rgb(103, 58, 183)'
        break;
      case 'w':
        this.classHeader = 'bg-warning';
        this.faIcon = 'fa fa-exclamation-triangle';
        break;
      default:
        this.classHeader = 'bg-success';
        break;
    }
  }
}
