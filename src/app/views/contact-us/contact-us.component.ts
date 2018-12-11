import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'a1-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  formData: FormData = new FormData();
  messageSent = false;

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    setTimeout(() => {
      this.messageSent = true;
    }, 1500);
    setTimeout(() => {
      this.messageSent = false;
    }, 4500);
  }

}

class FormData {
  name: string;
  email: string;
  message: string;
}

