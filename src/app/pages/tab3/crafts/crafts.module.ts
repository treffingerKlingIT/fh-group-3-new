import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CraftsPageRoutingModule } from './crafts-routing.module';

import { CraftsPage } from './crafts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CraftsPageRoutingModule
  ],
  declarations: [CraftsPage]
})
export class CraftsPageModule {}
