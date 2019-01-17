import { Component, OnInit } from "@angular/core";
import { fromEvent, Observable } from "rxjs";
import { debounceTime, map, startWith } from "rxjs/operators";
import { MenuEntry } from "../../model/menu-entry.model";

@Component({
  selector: "sii-top-nav-bar",
  templateUrl: "./top-nav-bar.component.html",
  styleUrls: ["./top-nav-bar.component.scss"]
})
export class TopNavBarComponent implements OnInit {
  /**
   * The menu entries
   */
  public menu: MenuEntry[] = [
    {
      title: "Home",
      route: "/home"
    },
    {
      title: "Science",
      route: "/home/science",
      subMenu: [
        {
          title: "Space",
          route: "/home/space"
        },
        {
          title: "Medecine",
          route: "/home/medecine"
        }
      ]
    },
    {
      title: "Sports",
      route: "/home/sport",
      subMenu: [
        {
          title: "MotoGP",
          route: "/home/motoGP"
        },
        {
          title: "Hockey",
          route: "/home/hockey"
        }
      ]
    },
    {
      title: "Politics",
      route: "/home/politics",
      subMenu: [
        {
          title: "U.S.A",
          route: "/home/usa"
        },
        {
          title: "France",
          route: "/home/france"
        }
      ]
    },
    {
      title: "Contact us",
      route: "/contact"
    }
  ] as MenuEntry[];
  /**
   * Flag menu opened
   */
  public menuOpened = false;
  /**
   * Flag Screen is small
   */
  public isSmallScreen: boolean;
  /**
   * Observable screen is small
   */
  public isSmallScreen$: Observable<boolean>;

  /**
   * Creates an Observable to watch for resize events and bind it to isSmallScreen flag
   */
  public ngOnInit() {
    // Checks if screen size is less than 1024 pixels
    const checkScreenSize = () => document.body.offsetWidth < 640;

    // Create observable from window resize event debounced so only fires every 500ms
    const screenSizeChanged$ = fromEvent(window, "resize").pipe(
      debounceTime(500),
      map(checkScreenSize)
    );

    // Start off with the initial value use the isScreenSmall$ | async in the
    // view to get both the original value and the new value after resize.
    this.isSmallScreen$ = screenSizeChanged$.pipe(startWith(checkScreenSize()));

    this.isSmallScreen$.subscribe(isSmall => {
      this.isSmallScreen = isSmall;
      this.menuOpened = !isSmall;
    });
  }

  /**
   * Open the meny entry
   * @param entry - the menu enty to open
   */
  public openMenuEntry(entry: MenuEntry) {
    entry.isOpened = true;
  }

  /**
   * Close the menu entry
   * @param entry - menu entry to close
   */
  public closeMenuEntry(entry: MenuEntry) {
    entry.isOpened = false;
  }

  /**
   * Open or Close the whole menu
   */
  public toogleMenu() {
    this.menuOpened = !this.menuOpened;
  }
}
