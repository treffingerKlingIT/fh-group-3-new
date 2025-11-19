import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubPagePageRoutingModule } from './club-page-routing.module';

import { ClubPagePage } from './club-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubPagePageRoutingModule
  ],
  declarations: [ClubPagePage]
})
export class ClubPagePageModule {}
