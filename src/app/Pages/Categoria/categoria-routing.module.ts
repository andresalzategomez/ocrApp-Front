import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatecategoriaComponent } from './createcategoria/components/createcategoria/createcategoria.component';

const routes: Routes = [
  {
    path : 'create/:idCompetencia',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    component : CreatecategoriaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
