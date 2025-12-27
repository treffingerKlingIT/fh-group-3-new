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

  close() {
    this.modalCtrl.dismiss();
  }

}
