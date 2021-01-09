import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {ButtonModule} from 'primeng-lts/button';
import {FileUploadModule} from 'primeng-lts/fileupload';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { OtroComponent } from './otro/otro.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    OtroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,FileUploadModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
