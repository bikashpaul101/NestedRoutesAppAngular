import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Child2Component } from "./child2.component";
const routes: Routes = [
  {path:"",component:Child2Component}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class Child2RoutingModule { }
