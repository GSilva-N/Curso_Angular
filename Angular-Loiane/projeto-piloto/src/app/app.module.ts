import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Projeto01Component } from './projeto01/projeto01.component';
import { Projeto02Component } from './projeto02/projeto02.component';

@NgModule({
  declarations: [
    AppComponent,
    Projeto01Component,
    Projeto02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
