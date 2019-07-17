import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Parent2RoutingModule } from "./parent2-routing.module";
import { Parent2Component } from "./parent2.component";
@NgModule({
  declarations: [Parent2Component],
  imports: [
    Parent2RoutingModule,
    CommonModule,
    RouterModule
  ]
})
export class Parent2Module { }
