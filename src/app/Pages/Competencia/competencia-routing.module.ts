import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatecompetenciaComponent } from './createcompetencia/components/createcompetencia/createcompetencia.component';
import { CalculatecompetenciaComponent } from './calculatecompetencia/components/calculatecompetencia/calculatecompetencia.component';
import { ListCompetenciaComponent } from './listcompetencia/components/listcompetencia/listcompetencia.component';
import { ShowCompetenciaComponent } from './showcompetencia/components/showcompetencia/showcompetencia.component';

const routes: Routes = [
  {
    path : 'create',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    component : CreatecompetenciaComponent,
  },
  {
    path : 'calculate',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    component : CalculatecompetenciaComponent,
  },
  {
    path : 'list',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    component : ListCompetenciaComponent,
  },
  {
    path : 'show/:idCompetencia',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    component : ShowCompetenciaComponent,
  },
  {
    path : 'detalle',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    component : ListCompetenciaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetenciaRoutingModule { }
