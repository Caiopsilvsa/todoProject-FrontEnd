import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './component/create/create.component';
import { ReadAllComponent } from './component/read-all/read-all.component';

const routes: Routes = [

  {
    path:'',
    component:ReadAllComponent
  } ,

  {

      path:'create',
      component:CreateComponent

  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
