import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtDTO {
  token!: string;
  type!: string;
  nombreUsuario!: string;
  authorities!: string[];
  

}
