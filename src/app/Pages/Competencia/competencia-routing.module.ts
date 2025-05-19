import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatecompetenciaComponent } from './createcompetencia/components/createcompetencia/createcompetencia.component';
import { ListCompetenciaComponent } from './listcompetencia/components/listcompetencia/listcompetencia.component';
import { ShowCompetenciaComponent } from './showcompetencia/components/showcompetencia/showcompetencia.component';
import { IniciarcompetenciaComponent } from './iniciarcompetencia/iniciarcompetencia.component';
import { ListCompetenciaFinalizadasComponent } from './listcompetencia/components/listcompetenciafinalizadas/listcompetenciafinalizadas.component';
import { ListCompetenciaAprobarComponent } from './listcompetencia/components/listcompetenciaaprobar/listcompetenciaaprobar.component';
import { ListCompetenciaAprobarLigaComponent } from './listcompetencia/components/listcompetenciaaprobarliga/listcompetenciaaprobarliga.component';

const routes: Routes = [
  {
    path : 'create',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    component : CreatecompetenciaComponent,
  },
  {
    path : 'iniciar/:idCompetencia',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    component : IniciarcompetenciaComponent,
  },
  {
    path : 'list',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    component : ListCompetenciaComponent,
  },
  {
    path : 'list/finalizadas',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    component : ListCompetenciaFinalizadasComponent,
  },
  {
    path : 'aprobar',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    component : ListCompetenciaAprobarComponent,
  },
  {
    path : 'aprobarLiga',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    component : ListCompetenciaAprobarLigaComponent,
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
