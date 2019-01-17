import { ContactUsComponent } from "./contact-us.component";
import {
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { ContactFormData } from "src/app/common/model/contactFormData.model";

describe("ContactUsComponent", () => {
  let fixture: ComponentFixture<ContactUsComponent>;
  let component: ContactUsComponent;
  const formData = new ContactFormData();
  formData.name = "Toto";
  formData.message = "Tata";

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactUsComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.debugElement.componentInstance;
    component.formData = formData;
  });

  it("should create the ContactUsComponent", () => {
    expect(component).toBeTruthy();
  });

  it("should display errorMessage if form is invalid", () => {
    component.sendMessage();
    expect(component.errorMessage).toBeTruthy();
  });

  it("should close the errorMesasge", () => {
    component.closeError();
    expect(component.errorMessage).toBeFalsy();
  });

  it("should display display and then hide messageSent if form is valid", fakeAsync(() => {
    formData.email = "toto@tata.com";
    component.sendMessage();
    expect(component.errorMessage).toBeFalsy();
    tick(1600);
    expect(component.messageSent).toBeTruthy();
    tick(5600);
    expect(component.messageSent).toBeFalsy();
  }));
});
