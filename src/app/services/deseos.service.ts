import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  listas: Lista [] = [];
  constructor() {
    let lista1 = new Lista('Recolectar piiedras del infinito');
    let lista2 = new Lista('Héroes a desaparecer');
    this.listas.push(lista1,lista2);
    console.log(this.listas);
   }

   crearLista(titulo:string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
   }
}
