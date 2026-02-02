import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-run',
  templateUrl: './run.page.html',
  styleUrls: ['./run.page.scss'],
})
export class RunPage implements OnInit {
  // This allows us to control the modal in the HTML
  @ViewChild(IonModal) modal!: IonModal;

  constructor() { }

  ngOnInit() {
  }

  // Function to close the popup when 'Cancel' or 'Publish' is clicked
  closeModal() {
    this.modal.dismiss();
  }

  // Optional: Function to handle the data when publishing
  onPublish() {
    console.log('Event Published!');
    this.modal.dismiss();
  }
}
