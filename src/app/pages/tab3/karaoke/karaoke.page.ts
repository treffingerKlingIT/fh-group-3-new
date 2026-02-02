import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-karaoke',
  templateUrl: './karaoke.page.html',
  styleUrls: ['./karaoke.page.scss'],
})
export class KaraokePage implements OnInit {
  // This "grabs" the modal from your HTML so we can control it
  @ViewChild(IonModal) modal!: IonModal;

  constructor() { }

  ngOnInit() { }

  // This is the missing function causing your error!
  closeModal() {
    this.modal.dismiss();
  }
}
