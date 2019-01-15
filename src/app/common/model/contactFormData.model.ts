/**
 * Class for the contact form datas
 */
export class ContactFormData {
  /** Name of the user */
  public name: string;
  /** Email of the user */
  public email: string;
  /** Message of the user */
  public message: string;
  /** Check if the form is valid */
  public isValid(): boolean {
    return this.name && this.email && this.message ? true : false;
  }
}
