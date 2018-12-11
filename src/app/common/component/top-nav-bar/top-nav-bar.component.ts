import { Component } from '@angular/core';
import { MenuEntry } from '../../model/menu-entry.model';

@Component({
  selector: 'a1-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent {

  menu: MenuEntry[] = [
    {
      title: 'Home',
      route: '/home'
    },
    {
      title: 'Science',
      route: '/home/science',
      subMenu: [
        {
          title: 'Space',
          route: '/home/space'
        },
        {
          title: 'Medecine',
          route: '/home/medecine'
        }
      ]
    },
    {
      title: 'Sports',
      route: '/home/sport',
      subMenu: [
        {
          title: 'MotoGP',
          route: '/home/motoGP'
        },
        {
          title: 'Hockey',
          route: '/home/hockey'
        }
      ]
    },
    {
      title: 'Politics',
      route: '/home/politics',
      subMenu: [
        {
          title: 'U.S.A',
          route: '/home/usa'
        },
        {
          title: 'France',
          route: '/home/france'
        }
      ]
    },
    {
      title: 'Contact us',
      route: '/contact'
    }
  ] as MenuEntry[];

  constructor() { }

  onEnter(entry: MenuEntry) {
    entry.ishovered = true;
  }

  onLeave(entry: MenuEntry) {
    entry.ishovered = false;
  }

}
