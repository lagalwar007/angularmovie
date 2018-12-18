import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Dependency modules */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/* Dependency modules */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
