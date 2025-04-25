import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  styleUrls: ['./sales-dashboard.component.css']
})
export class SalesDashboardComponent {

  collapsed = true;
  activeItem: string = 'home'; // default active item

  toggleSidebar() {
    this.collapsed = !this.collapsed;
    this.activeItem = 'home';
  }

  setActive(item: string) {
    this.activeItem = item;
  }

}
