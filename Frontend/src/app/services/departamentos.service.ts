import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Departamento } from '../models/departamento';

@Injectable({
  providedIn: 'root',
})
export class DepartamentosService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl =  environment.apiBaseUrl + 'departamentos/';
  }

  get() {
    return this.httpClient.get<Departamento[]>(this.resourceUrl + 'getAll');
  }

  post(obj: Departamento) {
    return this.httpClient.post<Departamento>(this.resourceUrl + 'create', obj);
  }

  put(obj: Departamento) {
    return this.httpClient.put<Departamento>(this.resourceUrl + 'update', obj);
  }

  getById(departamentoId: number) {
    return this.httpClient.get<Departamento>(
      this.resourceUrl + 'getById' + '?id=' + departamentoId
    );
  }
  delete(obj: Departamento) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: obj,
    };
    return this.httpClient.delete<void>(
      this.resourceUrl + 'delete', options);
  }


  deleteAll(obj: Departamento[]) {
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
