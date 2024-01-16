import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, concatMap, finalize } from "rxjs/operators";
import { ModalDialogService } from "../services/modal-dialog.service";
import { AuthService } from "./services/auth.service";
import { TokenService } from "./services/token.service";
import { JwtDTO } from "./models/jwt-dto";

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  constructor(
    private ms: ModalDialogService,
    private tokenService: TokenService,
    private authService: AuthService
    ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // if (!this.tokenService.isLogged()) {
    //   console.log("Logueate")
    //   return next.handle(req);
    // }

    let intReq = req;
    const token = this.tokenService.getToken();
    intReq = this.addToken(req, token);



    let NoBloquearPantalla = req.headers.get("NoBloquearPantalla");   //EnTypeahead
    if (!NoBloquearPantalla) this.ms.BloquearPantalla();

    return next.handle(intReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
            const dto: JwtDTO = new JwtDTO(this.tokenService.getToken());
            return this.authService.refresh(dto).pipe(concatMap((data: any) => {
              console.log('refreshing....');
              this.tokenService.setToken(data.token);
              intReq = this.addToken(req, data.token);
              return next.handle(intReq);
            }));
          } else if(error.status === 403){
            this.tokenService.logOut();
            }
            else if(error.status == 0){

              this.ms.Alert(
                'Servidor No Iniciado. Intente nuevamente en unos segundos',
                'GoDaddy VPS Error',
                'd'
              );
            }
            else{
              console.log("Error: " + error.error.message);
            this.ms.Alert(
              error.error.message,
              'Código de Error: ' + error.error.code,
              'd'
            );

          }

        //return throwError(error);
      }),
      finalize(() => {
        if (!NoBloquearPantalla) this.ms.DesbloquearPantalla();
      })
    );
  }

  private addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
  }


}

