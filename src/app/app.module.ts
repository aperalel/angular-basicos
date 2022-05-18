import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { MainPageComponent } from './dbz/main-page/main-page.component';
import { ContadorComponent } from './heroes/contador/contador/contador.component';

import { ContadorModule } from './heroes/contador/contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';


// Tarea: 
// Crear un módulo llamado contadorModule
// declaraciones, y exportaciones

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
