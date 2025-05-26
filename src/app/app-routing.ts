import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route} from '@angular/router';

import { MainComponent } from './Main/Main.component';
import { HomeTwoComponent } from './Pages/Home/HomeTwo/HomeTwo.component';
import { AboutUsComponent } from './Pages/AboutUs/AboutUs.component';
import { NotFoundComponent } from './Pages/NotFound/NotFound.component';
import { AuthGuard } from './Core/guards/auth.guard';

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
      // canActivate: [AuthGuard],
      // canActivateChild: [AuthGuard],
      component : MainComponent,
      children: [ 
         {
            path : 'home',
            component : HomeTwoComponent
         },
         {
            path : 'about',
            component : AboutUsComponent
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
         {
            path: 'session',loadChildren: ()=>
            import('./Pages/Session/Session.module').then (m => m.SessionModule)
         },
         {
            path: '',loadChildren: ()=>
            import('./Pages/About/About.module').then( m=> m.AboutModule)
         },
         // {
         //    path: 'cart',
         //    component: CartComponent
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
