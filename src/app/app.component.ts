import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';

  modalOpenState = false;
  currentUser: any;




  selectedUser(user: any) {
    this.modalOpenState = true;
    this.currentUser = user;
    console.log(user);
  }

  closeModal() {

    this.modalOpenState = false;

  }

  updateModal() {

    this.modalOpenState = false;

  }



}
