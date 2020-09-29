import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntiinflamatoriosPageRoutingModule } from './antiinflamatorios-routing.module';

import { AntiinflamatoriosPage } from './antiinflamatorios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntiinflamatoriosPageRoutingModule
  ],
  declarations: [AntiinflamatoriosPage]
})
export class AntiinflamatoriosPageModule {}
