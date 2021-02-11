# TEmas
- Cambiar ruta creada a un dentro de tabs.
- Pintar list e items
- Uso de clases para poner en tipo de datos
- Uso de local storage
- Find con json
# crear clase

Creamos carpeta llamada models
Dentro un archivo
lista-item-model.ts

export class ListaItem{
    desc:string;
    completado:boolean;
    constructor(desc:string){
        this.desc = desc;
        this.completado = false;
    }
}


en el componente

  listas: Lista [] = [];
  constructor() {
    let lista1 = new Lista('Recolectar piiedras del infinito');
    let lista2 = new Lista('Héroes a desaparecer');
    this.listas.push(lista1,lista2);
    console.log(this.listas);
   }


## Cambiar color de tab seleccionado

en global css

.tab-selected{
    color: rgb(255, 238, 0) !important;
}