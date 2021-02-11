import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public _deseos:DeseosService,
    private router:Router
    ) {}

    agregarLista(){
      this.router.navigateByUrl('/tabs/tab1/agregar')
    }

}
