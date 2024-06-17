import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route} from '@angular/router';

import { MainComponent } from './Main/Main.component';
import { HomeoneComponent } from './Pages/Home/HomeOne/HomeOne.component';
import { NotFoundComponent } from './Pages/NotFound/NotFound.component';

export const AppRoutes : Route[] = [
   {path : '', redirectTo: 'home', pathMatch: 'full',},
   {
      path : '',
      // canActivate: [AuthGuard],
      // canActivateChild: [AuthGuard],
      component : MainComponent,
      children: [ 
         
      ]
   },
      
   {
      path : '',
      redirectTo: 'home',
      pathMatch: 'full',
   },
   {
      path : '',
      // canActivate: [NoAuthGuard],
      // canActivateChild: [NoAuthGuard],
      component : MainComponent,
      children: [ 
         {
            path : 'home',
            component : HomeoneComponent
         },
         {
            path: 'not-found',
            component: NotFoundComponent
         },
         {
            path: 'competencia',loadChildren: ()=>
            import('./Pages/Competencia/competencia.module').then (m => m.CompetenciaModule)
         },
         {
            path: 'categoria',loadChildren: ()=>
            import('./Pages/Categoria/categoria.module').then (m => m.CategoriaModule)
         },
         {
            path: 'atleta',loadChildren: ()=>
            import('./Pages/Atleta/atleta.module').then (m => m.AtletaModule)
         },
         // {
         //    path: 'cart',
         //    component: CartComponent
         // },
         // {
         //    path: 'session',loadChildren: ()=>
         //    import('./Pages/Session/Session.module').then (m => m.SessionModule)
         // },
         // {
         //    path: 'checkout',loadChildren: ()=>
         //    import('./Pages/Checkout/Checkout.module').then (m => m.CheckoutModule)
         // },
         // {
         //    path: '',loadChildren: ()=>
         //    import('./Pages/About/About.module').then( m=> m.AboutModule)
         // },
      ]
   },
   {path: '**', redirectTo: 'not-found'}
]
