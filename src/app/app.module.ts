import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component'; 

@NgModule({
  declarations: [
    UsuariosListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [] // Elimina AppComponent de aquí
})
export class AppModule { }
