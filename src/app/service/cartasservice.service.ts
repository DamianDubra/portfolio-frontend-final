import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartasService } from '../class/cartas.service';
@Injectable({
  providedIn: 'root'
})
export class CartasserviceService {

  cartasURL = 'https://portfoliobackenddamian1.onrender.com/cartas/';

  constructor(private httpClient: HttpClient) { }

  public getId(id: number): Observable<CartasService> {
    return this.httpClient.get<CartasService>(this.cartasURL + id);
  }


  public update(id: number, cartas: CartasService): Observable<any> {
    return this.httpClient.put<any>(this.cartasURL + `update/${id}`, cartas);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.cartasURL + `delete/${id}`);
  }
}