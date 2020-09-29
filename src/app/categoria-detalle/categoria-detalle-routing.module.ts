import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaDetallePage } from './categoria-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaDetallePageRoutingModule {}
