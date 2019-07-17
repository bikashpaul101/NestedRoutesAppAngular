import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent3RoutingModule } from "./parent3-routing.module";
import { Parent3Component } from "./parent3.component";
@NgModule({
  declarations: [Parent3Component],
  imports: [
    Parent3RoutingModule,
    CommonModule
  ]
})
export class Parent3Module { }
