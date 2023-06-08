import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  host: {
    'class': 'd-flex flex-column',
    'id': 'content-wrapper'
  }
})
export class DashboardComponent {
  constructor() { }
}
