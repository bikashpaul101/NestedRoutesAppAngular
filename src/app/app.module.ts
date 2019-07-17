import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Parent1Module } from "./parent1/parent1.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    Parent1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
