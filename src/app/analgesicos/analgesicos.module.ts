import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnalgesicosPageRoutingModule } from './analgesicos-routing.module';

import { AnalgesicosPage } from './analgesicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnalgesicosPageRoutingModule
  ],
  declarations: [AnalgesicosPage]
})
export class AnalgesicosPageModule {}
