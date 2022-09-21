import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent  {

  //i18nselect

  nombre:string='Susana';
  genero: string ='femenino';

  invitacionMapa={
    'masculino' : 'invitarlo',
    'femenino'  : 'invitarla'
  }

//i18nPlural

clientes:string[]= ['María', 'Juan','Pedro','José','Carlos','Melchor'];
clientesMapa={
  '=0':'NO tenemos ningun cliente esperando',
  '=1':'tenemos un cliente esperando',
  'other': 'tenemos # clientes esperando'
};
  constructor() { }

  cambiarCliente(){
    this.nombre='Carlos'
    this.genero='masculino'
  }

  borrarCliente(){
    this.clientes.shift();
  }


//KetyValue Pipe

persona = {
  nombre    : 'Fernando',
  edad      : 32,
  direccion : 'Cayambe Ecuador'
}


//JsonPipe
heroes=[
  {
    nombre:'SuperCuy',
    vuela:true
  },
  {
    nombre:'SuperConejo',
    vuela:false
  },
  {
    nombre:'SuperPerro',
    vuela:true
  }
]

///AsyncPipe
miObservador=interval(1000); //va ha estar emitinedo 0,1,2

valorPromesa = new Promise ((resolve, reject)=>{
  setTimeout(()=>{
    resolve('Tenemos data de promesa');
  },3500);
 
});

}
