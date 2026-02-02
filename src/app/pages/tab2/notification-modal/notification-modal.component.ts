import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.scss'],
})
export class NotificationModalComponent {

  // Added '!' to fix the red line
  @Input() notification!: any;

  constructor(private modalCtrl: ModalController) { }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  accept() {
    console.log('Accepted:', this.notification.title);
    this.modalCtrl.dismiss({ accepted: true });
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
