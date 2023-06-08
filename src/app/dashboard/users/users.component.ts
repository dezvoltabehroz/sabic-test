import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import 'datatables.net';
import axios from 'axios';
declare var $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  host: {
    'class': 'd-flex flex-column',
    'id': 'content-wrapper'
  }
})
export class UsersComponent implements AfterViewInit {
  @ViewChild('dataTable', { static: false }) table: ElementRef | undefined;

  data: any[] = [];

  ngAfterViewInit(): void { this.get_data() }

  get_data = async () => {
    const options = {
      method: 'GET',
      url: 'https://free-nba.p.rapidapi.com/players',
      params: { page: '0', per_page: '25' },
      headers: {
        'X-RapidAPI-Key': 'f96fc5aabemshac819d475560ad7p1c064bjsnc396d1761209',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      this.data = response.data.data;
      if (this.table && this.table.nativeElement) {
        console.log("should worl");
        setTimeout(() => { $(this.table!.nativeElement).DataTable(); }, 500);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
