import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntiinfecciososPage } from './antiinfecciosos.page';

const routes: Routes = [
  {
    path: '',
    component: AntiinfecciososPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntiinfecciososPageRoutingModule {}
