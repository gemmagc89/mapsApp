import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  route: string;
  name: string;
}

@Component({
  selector: 'side-menu',
  imports: [CommonModule, RouterModule],

  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route: '/maps/fullscreen', name: 'FullScreen' },
    { route: '/maps/zoom-range', name: 'Zoom Range' },
    { route: '/maps/markers', name: 'Markers' },
    { route: '/maps/properties', name: 'Houses' },
    { route: '/alone', name: 'Alone Page'},
  ];
}
