import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Informe } from '../models/informe';

@Injectable({
  providedIn: 'root',
})
export class InformesService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl =  environment.apiBaseUrl + 'informes/';
  }

  get() {
    return this.httpClient.get<Informe[]>(this.resourceUrl + 'getAll');
  }

  post(obj: Informe) {
    return this.httpClient.post<Informe>(this.resourceUrl + 'create', obj);
  }

  put(obj: Informe) {
    // let params = new HttpParams();
    // params = params.append('id', id);

    // return this.httpClient.put<any>(this.resourceUrl + 'update', obj, {params: params});

    return this.httpClient.put<Informe>(this.resourceUrl + 'update', obj);
  }

  getById(informeId: number) {
    return this.httpClient.get<Informe>(
      this.resourceUrl + 'getById' + '?id=' + informeId
    );
  }
  delete(obj: Informe) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: obj,
    };
    return this.httpClient.delete<void>(
      this.resourceUrl + 'delete', options);
  }


  deleteAll(obj: Informe[]) {
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
