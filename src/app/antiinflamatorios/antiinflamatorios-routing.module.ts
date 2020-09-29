import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntiinflamatoriosPage } from './antiinflamatorios.page';

const routes: Routes = [
  {
    path: '',
    component: AntiinflamatoriosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntiinflamatoriosPageRoutingModule {}
