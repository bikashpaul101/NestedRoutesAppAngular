import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Parent2Component } from "./parent2.component";
const routes: Routes = [
  {path:"",component:Parent2Component,
  children:[
    {path:"child2",loadChildren:"./child2/child2.module#Child2Module",data:{preload:true}}
  ]}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class Parent2RoutingModule { }
