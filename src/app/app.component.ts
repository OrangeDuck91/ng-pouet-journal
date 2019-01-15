import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'sii-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /** App title */
  public title = 'ng-pouet-journal'
  /** current route */
  public currentRoute: string

  /**
   * Create the App component
   * @param router App router
   */
  constructor (private router: Router) { }

  /**
   * Update the currentRoute attribute when the route change
   */
  public ngOnInit () {
    this.router.events.subscribe(() => {
      this.currentRoute = window.location.pathname
    })
  }
}
