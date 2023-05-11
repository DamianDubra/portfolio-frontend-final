import { Injectable } from '@angular/core';



export class CartasService {
  id?: number;
  imagen!: Uint8Array;
  title!: string;
  texto!: string;
  texto2!: string;
  texto3!: string;
  texto4!: string;
  texto5!: string;
  texto6!: string;
  texto7!: string;
  texto8!: string;
  texto9!: string;
  texto10!: string;
  constructor(imagen: Uint8Array, title: string,texto:string,texto2:string,texto3:string, texto4:string,texto5:string,texto6:string,texto7:string,texto8:string,texto9:string,texto10:string,) { 
    this.imagen= imagen;
    this.title= title;
    this.texto=texto;
    this.texto2=texto2;
    this.texto3=texto3;
    this.texto4=texto4;
    this.texto5=texto5;
    this.texto6=texto6;
    this.texto7=texto7;
    this.texto8=texto8;
    this.texto9=texto9;
    this.texto10=texto10;
  }
}
