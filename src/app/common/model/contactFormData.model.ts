export class ContactFormData {
  public name: string;
  public email: string;
  public message: string;

  public isValid(): boolean {
    return this.name && this.email && this.message ? true : false;
  }
}
