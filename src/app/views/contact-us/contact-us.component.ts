import { Component, OnInit } from "@angular/core";
import { ContactFormData } from "../../common/model/contactFormData.model";

@Component({
  selector: "sii-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"]
})
export class ContactUsComponent {
  /** Contact form datas */
  public formData: ContactFormData = new ContactFormData();
  /** Flag message sent */
  public messageSent = false;
  /** flag Error message */
  public errorMessage = false;

  /**
   * Check if the form is valid and send the form datas
   */
  public sendMessage() {
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

  public closeError() {
    this.errorMessage = false;
  }
}
