import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntiinfecciososPageRoutingModule } from './antiinfecciosos-routing.module';

import { AntiinfecciososPage } from './antiinfecciosos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntiinfecciososPageRoutingModule
  ],
  declarations: [AntiinfecciososPage]
})
export class AntiinfecciososPageModule {}
