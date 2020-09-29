import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntialergicosPage } from './antialergicos.page';

const routes: Routes = [
  {
    path: '',
    component: AntialergicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntialergicosPageRoutingModule {}
