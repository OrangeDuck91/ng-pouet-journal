import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'a1-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  formData: FormData = new FormData();
  messageSent = false;
  errorMessage = false;

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    if (this.formData.isValid()) {
      setTimeout(() => {
        this.messageSent = true;
      }, 1500);
      setTimeout(() => {
        this.messageSent = false;
      }, 5500);
    } else {
      this.errorMessage = true;
    }
  }

  closeError(){
    this.errorMessage = false;
  }

}

class FormData {
  name: string;
  email: string;
  message: string;

  isValid(): boolean {
    // const res: boolean = (this.name) && (this.email) && (this.message) ? true : false;
    return  (this.name) && (this.email) && (this.message) ? true : false;
  }
}

