import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Parent1RoutingModule } from "./parent1-routing.module";
import { Parent1Component } from "./parent1.component";
import { Child1Component } from "./child1/child1.component";
@NgModule({
  imports: [
    CommonModule,RouterModule,Parent1RoutingModule
  ],
  declarations:[Parent1Component,Child1Component]
})
export class Parent1Module { }
