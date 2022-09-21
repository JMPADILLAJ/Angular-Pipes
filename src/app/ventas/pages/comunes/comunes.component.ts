import { Component } from '@angular/core';

@Component({
  selector: 'app-comunes',
  templateUrl: './comunes.component.html'
})
export class ComunesComponent  {

 nombreLower:     string = 'josé';
 nombreUpper:     string = 'JOSÉ';
 nombreCOmpleto : string = 'jOsE paDiLLa';

 fecha: Date=new Date();

}
