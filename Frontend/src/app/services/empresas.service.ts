import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root',
})
export class EmpresasService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl =  environment.apiBaseUrl + 'empresas/';
  }

  get() {
    return this.httpClient.get<Empresa[]>(this.resourceUrl + 'getAll');
  }

  post(obj: Empresa) {
    return this.httpClient.post<Empresa>(this.resourceUrl + 'create', obj);
  }

  put(obj: Empresa) {
    return this.httpClient.put<Empresa>(this.resourceUrl + 'update', obj);
  }

  getById(empresaId: number) {
    return this.httpClient.get<Empresa>(
      this.resourceUrl + 'getById' + '?id=' + empresaId
    );
  }
  delete(obj: Empresa) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: obj,
    };
    return this.httpClient.delete<void>(
      this.resourceUrl + 'delete', options);
  }


  deleteAll(obj: Empresa[]) {
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
