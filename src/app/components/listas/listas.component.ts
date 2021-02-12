import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { DeseosService } from '../../services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  @Input() lista:any;
  @Input() terminada = true;
  constructor( private router:Router,
    
    public _deseos:DeseosService) { }

  ngOnInit() {}

  listaSeleccionada(lista){
    if (this.terminada) {
      console.log(lista);
      this.router.navigateByUrl('tabs/tab2/agregar/'+lista.id);
    }else{
      console.log(lista);
      this.router.navigateByUrl('tabs/tab1/agregar/'+lista.id);
    }

  }

  borrarLista(lista:Lista){
    this._deseos.borrarLista(lista);
  }

}
