import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl =  environment.apiBaseUrl + 'usuarios/';
  }

  get() {
    return this.httpClient.get<Usuario[]>(this.resourceUrl + 'getAll');
  }

  post(obj: Usuario) {
    return this.httpClient.post<Usuario>(this.resourceUrl + 'actualizarInformes', obj);
  }

  // actualizarInformes(obj: Usuario) {
  //   return this.httpClient.post<Usuario>(this.resourceUrl + 'actualizarInformes', obj);
  // }

  // put(obj: Usuario) {
  //   return this.httpClient.put<Usuario>(this.resourceUrl + 'update', obj);
  // }

  getById(id: number) {
    return this.httpClient.get<Usuario>(
      this.resourceUrl + 'getById' + '?id=' + id
    );
  }

  getByUserName(nombreUsuario: string) {
    return this.httpClient.get<Usuario>(
      this.resourceUrl + 'getByUserName' + '?nombreUsuario=' + nombreUsuario
    );
  }

  delete(obj: Usuario) {
    return this.httpClient.delete<void>(
      this.resourceUrl + 'delete?id='+ obj.id);
  }


  deleteAll(obj: Usuario[]) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: obj,
    };
    return this.httpClient.delete<void>(
      this.resourceUrl + 'deleteAll', options);
  }
}
