import { Component, OnInit } from '@angular/core'; // Added OnInit
import { ModalController } from '@ionic/angular';
import { NotificationModalComponent } from './notification-modal/notification-modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit { // Added implements OnInit

  // Control variable for the toast
  isToastOpen = false;

  notifications = [
    {
      title: 'New Event Invitation',
      text: 'You got invited to a new Dinner Evening',
      fullDetails: 'Hier ist der lange Text für Nummer 1...',
      icon: 'assets/icon/club-1.svg'
    },
    {
      title: 'WSWED Run #12 is cancelled',
      text: 'Due to bad weather the run is cancelled.',
      tag: "WSWED RUN CLUB",
      fullDetails: 'Hier ist der lange Text für Nummer 2...',
      icon: 'assets/icon/club-2.svg'
    }
  ];

  constructor(private modalCtrl: ModalController) {}

  // This runs automatically when the page loads
  ngOnInit() {
    this.setOpen(true);
  }

  // Helper function to change the toast state
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
