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


  isToastOpen = false;

  myEvents: MbscCalendarEvent[] = [
    {
      start: new Date(2026, 1, 2, 18, 30),
      end: new Date(2026, 1, 2, 20, 0),
      title: 'WSWED Run #12',
      location: 'Start: Kunsthaus',
      color: '#47A2D3'
    }
  ];


  dailyOptions: MbscEventcalendarOptions = {
    view: {
      agenda: {
        type: 'day',
        scrollable: false
      }
    },
    showControls: false,
  };


  notifications = [
    {
      title: 'Pasta Night',
      text: 'Vicky invited you to a Dinner Evening',
      tag: "Dinner Club",
      type: 'dinner',
      location: 'Vickys place',
      date: new Date(2026, 1, 6, 20, 0),
      fullDetails: "I want to invite you to our monthly Dinner Party. The theme is Pasta Night. I prepare Pasta and drinks, but I ask you to bring one pasta sauce."
    },
    {
      title: 'WSWED Run #13',
      text: 'Next run is already scheduled.',
      tag: "WSWED RUN CLUB",
      type: 'run',
      location: 'Start: Kunsthaus',
      date: new Date(2026, 1, 2, 18, 30),
      fullDetails: 'Get ready for our #13 run this year. Lets hit the 10k. VAMOS.'
    }
  ];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    // Optional: Toast beim Laden der Seite anzeigen
    // this.setOpen(true);
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  // Diese Funktion öffnet das Modal und löscht die Nachricht bei Erfolg
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

    await modal.present();

    // Hier warten wir auf die Rückgabe aus dem Modal
    const { data } = await modal.onDidDismiss();

    // Wenn im Modal 'accepted: true' gesendet wurde
    if (data && data.accepted) {
      // Entferne das spezifische Item aus der notifications-Liste
      this.notifications = this.notifications.filter(n => n !== item);

      console.log('Notification entfernt:', item.title);


    }
  }
}
