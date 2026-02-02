import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KaraokePageRoutingModule } from './karaoke-routing.module';

import { KaraokePage } from './karaoke.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KaraokePageRoutingModule
  ],
  declarations: [KaraokePage]
})
export class KaraokePageModule {}
