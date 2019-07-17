import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules} from '@angular/router';
import { Parent1Component } from "./parent1/parent1.component";
import { AppCustomPreloader } from "./config/AppCustomPreloader";
const routes: Routes = [
  
  {path:"parent1",component:Parent1Component},
  {path:"",redirectTo:"/parent1",pathMatch:"full"},
  {path:"parent2",loadChildren:"./parent2/parent2.module#Parent2Module"},
  {path:"parent3",loadChildren:"./parent3/parent3.module#Parent3Module",data:{preload:true}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: AppCustomPreloader})],
  exports: [RouterModule],
  providers:[AppCustomPreloader]
})
export class AppRoutingModule { }
