import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'categoria-detalle',
    loadChildren: () => import('./categoria-detalle/categoria-detalle.module').then( m => m.CategoriaDetallePageModule)
  },
  {
    path: 'medicamento-detalle',
    loadChildren: () => import('./medicamento-detalle/medicamento-detalle.module').then( m => m.MedicamentoDetallePageModule)
  },
  {
    path: 'quienes-somos',
    loadChildren: () => import('./quienes-somos/quienes-somos.module').then( m => m.QuienesSomosPageModule)
  },
  {
    path: 'sucursales',
    loadChildren: () => import('./sucursales/sucursales.module').then( m => m.SucursalesPageModule)
  },
  {
    path: 'analgesicos',
    loadChildren: () => import('./analgesicos/analgesicos.module').then( m => m.AnalgesicosPageModule)
  },
  {
    path: 'antialergicos',
    loadChildren: () => import('./antialergicos/antialergicos.module').then( m => m.AntialergicosPageModule)
  },
  {
    path: 'antiinfecciosos',
    loadChildren: () => import('./antiinfecciosos/antiinfecciosos.module').then( m => m.AntiinfecciososPageModule)
  },
  {
    path: 'antiinflamatorios',
    loadChildren: () => import('./antiinflamatorios/antiinflamatorios.module').then( m => m.AntiinflamatoriosPageModule)
  },
  {
    path: 'antidiarreicos',
    loadChildren: () => import('./antidiarreicos/antidiarreicos.module').then( m => m.AntidiarreicosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
