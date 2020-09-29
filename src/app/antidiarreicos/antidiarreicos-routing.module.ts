import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntidiarreicosPage } from './antidiarreicos.page';

const routes: Routes = [
  {
    path: '',
    component: AntidiarreicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntidiarreicosPageRoutingModule {}
