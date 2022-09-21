import { Component} from '@angular/core';


import { Heroe, Color } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent {

  enMayusculas:boolean=true;
  ordenarPor:string='';


  heroes: Heroe[]=[{
    nombre:'Picoro',
    vuela : true,
    color : Color.verde
  },
  {
    nombre:'PerroMan',
    vuela : false,
    color : Color.negro
  },
  {
    nombre:'Vegueta',
    vuela : true,
    color : Color.rojo
  },
  {
    nombre:'Iroman',
    vuela : true,
    color : Color.rojo
  },
  {
    nombre:'Thor',
    vuela : false,
    color : Color.amarillo
  }
];

cambiar(){
this.enMayusculas=!this.enMayusculas;
}


cambiarOrden(valor:string){
this.ordenarPor=valor;
}

}
