import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item-model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  lista:Lista;
  nombreItem = '';
  constructor(
    private _deseos:DeseosService,
    private route:ActivatedRoute
  ) {
    const listaId = this.route.snapshot.paramMap.get('listaId');
    console.log(listaId);
    this.lista = this._deseos.obtenerLista(listaId);
    console.log(this.lista);
   }

  ngOnInit() {
  }

  agregarItem(){
    if (this.nombreItem.length ===0) {
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem)
    this.lista.items.push(nuevoItem);
    this.nombreItem="";
    this._deseos.guardarStorage();
    console.log(this._deseos.listas);
  }

  cambioCheck(item:ListaItem){
    console.log(item);
    const pendiente = this.lista.items.filter(itemData => !itemData.completado).length;
    if(pendiente ===0){
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    }else{
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }
    this._deseos.guardarStorage();
    console.log(this._deseos.listas);
  }

  borrar(i:number){
    this.lista.items.splice(i,1); // desde  y cuantos
    this._deseos.guardarStorage();
  }

}
