import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Parent3Component } from "./parent3.component";
import { Child3Component } from "./child3/child3.component";
const routes: Routes = [
  {path:"",component:Parent3Component,
  children:[
    {path:"child3",component:Child3Component}
  ]}
];
@NgModule({
  declarations: [Child3Component],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class Parent3RoutingModule { }
