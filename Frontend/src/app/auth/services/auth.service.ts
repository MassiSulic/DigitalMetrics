import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';
import { JwtDTO } from '../models/jwt-dto';
import { environment } from './../../../environments/environment';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.apiBaseUrl + 'auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }

  public refresh(dto: JwtDTO): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'refresh', dto);
  }

  public actualizarInformes(obj: Usuario) {
    return this.httpClient.post<Usuario>(this.authURL + 'actualizarInformes', obj);
  }

  public editar(obj: Usuario) {
    return this.httpClient.post<Usuario>(this.authURL + 'editar', obj);
  }
}
