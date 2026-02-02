import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { MbscCalendarEvent, MbscEventcalendarOptions } from '@mobiscroll/angular';



import { Tab2PageRoutingModule } from './tab2-routing.module';


// 1. IMPORT HINZUFÜGEN
import { NotificationModalComponent } from './notification-modal/notification-modal.component';
import { MbscModule } from '@mobiscroll/angular';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    MbscModule
  ],
  // 2. HIER EINTRAGEN
  declarations: [Tab2Page, NotificationModalComponent]
})



export class Tab2PageModule {}
