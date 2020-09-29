import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntialergicosPageRoutingModule } from './antialergicos-routing.module';

import { AntialergicosPage } from './antialergicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntialergicosPageRoutingModule
  ],
  declarations: [AntialergicosPage]
})
export class AntialergicosPageModule {}
