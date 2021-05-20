import { Component } from '@angular/core';

@Component({
  selector: 'footer-box',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})

export class footerComponents {
  title = 'angularSales';
  changeview: boolean = false;
  searchQuery: string = "";
  recieveData($event) {
    this.changeview = $event
  }
  recieveQuery($event) {
    this.searchQuery = $event
    console.log('in app comp to prod comp:', this.searchQuery);
  }
}


