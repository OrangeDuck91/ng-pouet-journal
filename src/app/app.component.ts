import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'sii-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'ng-pouet-journal'
  public currentRoute: string

  constructor (private router: Router) { }

  public ngOnInit () {
    this.router.events.subscribe(() => {
      this.currentRoute = window.location.pathname
    })
  }
}
