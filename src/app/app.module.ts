import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Cambiar el idioma local de la App a espaniol
import localEs from '@angular/common/locales/es-EC';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localEs);

//Cambiar el idioma local de la App a frances
import localFr from '@angular/common/locales/fr-BE';
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:'es-EC'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
