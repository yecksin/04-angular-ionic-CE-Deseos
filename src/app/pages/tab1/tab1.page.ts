import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public _deseos:DeseosService,
    private router:Router,
    public alertController: AlertController
    ) {}

   async agregarLista(){
      // this.router.navigateByUrl('/tabs/tab1/agregar')
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Nueva lista',
        inputs:[
          {
            name:'titulo',
            type:'text',
            placeholder:'Nombre de la lista'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler:()=>{
              console.log('Cancelar');
            }
          },
          {
            text: 'Crear',
            handler:(data)=>{
              // console.log(data);
              if (data.titulo.length ===0) {
                return;
              }
              // tengo que crear la lista
              this._deseos.crearLista(data.titulo);
            }
          }
        ]
      });
  
      await alert.present();
    }

}
