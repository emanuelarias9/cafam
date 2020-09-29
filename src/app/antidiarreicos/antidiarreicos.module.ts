import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntidiarreicosPageRoutingModule } from './antidiarreicos-routing.module';

import { AntidiarreicosPage } from './antidiarreicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntidiarreicosPageRoutingModule
  ],
  declarations: [AntidiarreicosPage]
})
export class AntidiarreicosPageModule {}
