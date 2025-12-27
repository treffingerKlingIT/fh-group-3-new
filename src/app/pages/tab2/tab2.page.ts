import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
// Importiere deine LOKALE Komponente (der Pfad ist jetzt kurz, da gleicher Ordner)
import { NotificationModalComponent } from './notification-modal/notification-modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // Deine Daten für die Liste
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

  // Die Funktion, die beim Klick ausgeführt wird
  async openModal(item: any) {
    const modal = await this.modalCtrl.create({
      component: NotificationModalComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5],
      cssClass: 'notification-sheet-modal', // <--- Add this line
      handle: false,
      componentProps: {
        notification: item // Wir übergeben das angeklickte Item
      }
    });
    return await modal.present();
  }

}
