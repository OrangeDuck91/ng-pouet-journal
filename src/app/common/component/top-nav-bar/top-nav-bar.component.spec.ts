import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { TopNavBarComponent } from "./top-nav-bar.component";
import { RouterTestingModule } from "@angular/router/testing";
import { MenuEntry } from "../../model/menu-entry.model";
import { Observable } from "rxjs";

describe("TopNavBarComponent", () => {
  let component: TopNavBarComponent;
  let fixture: ComponentFixture<TopNavBarComponent>;
  const stub: any = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopNavBarComponent],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(TopNavBarComponent);
    component = fixture.debugElement.componentInstance;
  });

  it("should create TopNavBarComponent", () => {
    expect(component).toBeTruthy();
  });

  it("should open Menu entry", () => {
    const entry: MenuEntry = component.menu[2];
    component.openMenuEntry(entry);
    expect(entry.isOpened).toBeTruthy();
  });

  it("should close Menu entry", () => {
    const entry: MenuEntry = component.menu[2];
    component.closeMenuEntry(entry);
    expect(entry.isOpened).toBeFalsy();
  });

  it("should toggle the menu", () => {
    expect(component.menuOpened).toBeFalsy();
    component.toogleMenu();
    expect(component.menuOpened).toBeTruthy();
    component.toogleMenu();
    expect(component.menuOpened).toBeFalsy();
  });

  // describe("initObservable", () => {
  //   beforeEach(() => {
  //     const observable = Observable.create(obs => {
  //       // Push one event width a innerWidth of 500 on the stream
  //       obs.next({ target: { innerWidth: 500 } });
  //       // Expose function to be able to trigger events
  //       stub.nextResizeEvent = obs;
  //     });

  //     spyOn(Observable, "fromEvent").and.returnValue(observable);
  //   });
  // });
});
