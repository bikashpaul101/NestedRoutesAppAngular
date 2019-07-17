import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Parent1Component } from "./parent1.component";
import { Child1Component } from "./child1/child1.component";
const routes: Routes = [
  {path:"",component:Parent1Component,
  children:[
    {path:"child1",component:Child1Component}
  ]},
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class Parent1RoutingModule { }
