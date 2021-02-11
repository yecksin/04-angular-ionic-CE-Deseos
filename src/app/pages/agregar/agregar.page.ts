import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  lista:Lista;
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

}
