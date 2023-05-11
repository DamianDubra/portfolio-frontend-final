import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../class/new-user.service';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../class/login-user.service';
import { JwtDTO } from '../class/jwt-dto.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/auth/';
  tokenService: any;

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }
  public logout(): void {
    this.tokenService.logOut();
  }
  
}