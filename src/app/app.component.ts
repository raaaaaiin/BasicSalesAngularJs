import { Component, HostListener, Input, SimpleChanges } from '@angular/core';
import { NavigationStart, NavigationError, NavigationEnd } from '@angular/router';
import { Router, Event } from '@angular/router';
import { productcomponents } from './product/product.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent {
  header :boolean = true;
  clickProduct: boolean;
  isProducts: boolean = true;
  title = 'angularSales';
  changeview: boolean = false;
  searchQuery: string = "";
  recieveData($event) {
    this.changeview = $event
  }
  recieveSignal($event) {
    this.isProducts = $event;
  }
  recieveQuery($event) {
    this.searchQuery = $event
    console.log('in app comp to prod comp:', this.searchQuery);
  }
  recieveProduct($event) {
    this.isProducts = $event;
  }

  signalProduct() {
    this.isProducts = true;
  }
  ngOnChanges(changes: SimpleChanges) {

    
  }
  ngOnInit(): void {
  }
  lastposition: number = 0;
  logical: boolean = false;
  logicalgate: boolean = true;
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {

   
    sessionStorage.scrollPos = window.scrollY;
    console.log(sessionStorage.scrollPos)
    //remove this if ur done with itemadd only this one
    
    //this.isProducts = false;
  }
  //Scroll to the save value postion
  
  ngAfterViewInit() {
    window.scrollTo(0, sessionStorage.scrollPos)
  }
  callBack() {
    console.log("And im back!");
  }

  constructor(private router: Router,private productco: productcomponents) {
    //Router subscriber
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
 
          sessionStorage.Duplicate = sessionStorage.scrollPos
        this.scrollToTop();
        
      }

      if (event instanceof NavigationError) {
        // Handle error
       
      }
    });
  }
  scrollToTop(): void {
    setTimeout(() => window.scroll(0, sessionStorage.duplicopy), 100);
  }
  headertransition() {
    this.header = !this.header;
  }
}


