import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateatletaComponent } from './createatleta/components/createatleta/createatleta.component';

const routes: Routes = [
  {
    path : 'register',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    component : CreateatletaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtletaRoutingModule { }
