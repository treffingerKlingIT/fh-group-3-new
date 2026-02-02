import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.page.html',
  styleUrls: ['./presentations.page.scss'],
})
export class PresentationsPage implements OnInit {
  // This "grabs" the modal from your HTML so we can control it
  @ViewChild(IonModal) modal!: IonModal;

  constructor() { }

  ngOnInit() { }

  // This is the missing function causing your error!
  closeModal() {
    this.modal.dismiss();
  }
}
