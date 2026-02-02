import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotificationModalComponent } from './notification-modal/notification-modal.component';
import { MbscCalendarEvent, MbscEventcalendarOptions } from '@mobiscroll/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  // Control variable for the toast
  isToastOpen = false;

  // 1. Mobiscroll Events Data
  myEvents: MbscCalendarEvent[] = [
    {
      start: new Date(2026, 1, 2, 18, 30),
      end: new Date(2026, 1, 2, 20, 0),
      title: 'WSWED Run #12',
      location: 'Start: Kunsthaus',
      color: '#ff0000'
    }
  ];

  // 2. Mobiscroll Configuration for "Today at a glance"
  dailyOptions: MbscEventcalendarOptions = {
    view: {
      agenda: {
        type: 'day',
          scrollable: false
      }
    },
    // This removes the calendar header (month/arrows) to keep the dashboard clean
    showControls: false,
  };

  notifications = [
    {
      title: 'New Dinner Invitation',
      text: 'Vicky invited you to a Dinner Evening',
      tag: "Dinner Club",
      fullDetails: 'Hier ist der lange Text für Nummer 1...',
      icon: 'assets/icon/club-1.svg'
    },
    {
      title: 'WSWED Run #13',
      text: 'Next run is already scheduled.',
      tag: "WSWED RUN CLUB",
      fullDetails: 'Hier ist der lange Text für Nummer 2...',
      icon: 'assets/icon/run-club.svg'
    }
  ];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.setOpen(true);
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  async openModal(item: any) {
    const modal = await this.modalCtrl.create({
      component: NotificationModalComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5],
      cssClass: 'notification-sheet-modal',
      handle: false,
      componentProps: {
        notification: item
      }
    });
    return await modal.present();
  }
}
