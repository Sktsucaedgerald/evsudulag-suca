import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  totalSales: number = 15320;
  orders: number = 256;
  customers: number = 120;
  stockItems: number = 78;

  logout() {
    alert('Logging out...');
    // Implement logout logic here
  }
}
