import {
  TestBed,
  ComponentFixture,
  fakeAsync,
  tick
} from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { SharedModule } from "./common/shared.module";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { APP_ROUTES } from "./app-routing.module";
import { ViewsModule } from "./views/views.module";
import { Location } from "@angular/common";

describe("AppComponent", () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes(APP_ROUTES),
        ViewsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  });

  it("should create the app", () => {
    expect(app).toBeTruthy();
  });

  it(`should update currentRoute when route changes, ignoring fragment`, fakeAsync(() => {
    app.ngOnInit();
    router
      .navigate(["/home"], { fragment: "top" })
      .then(() => {
        expect(app.currentRoute).toBe("/home");
      })
      .catch(err => console.error(err));
    tick();
  }));
});
