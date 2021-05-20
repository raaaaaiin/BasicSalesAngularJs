import { Component, EventEmitter, Injectable, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../product/product.service';
import { Iitem } from './itemI';
@Component({
  selector: 'dashboardprod',
  templateUrl: './dashboardproduct.html',
  styleUrls: ['./dashboardproduct.css']
})
  @Injectable({
providedIn:'root'
})
export class dashboardproductComponent implements OnChanges{
  @Input() changeview: boolean;
  @Input() searchQuery: string;
  @Output() clickProduct = new EventEmitter<boolean>();
  profileusername: string = "Raineer Filosopo";
  upperlimit: number = 50;
  private _routeScrollPositions: { [url: string]: number }[] = [];
  private _subscriptions: Subscription[] = [];
  clickProductAction : boolean = true;

  clickProductevent() {
    this.clickProductAction = false;
    this.clickProduct.emit(this.clickProductAction);
  }
  constructor(private productService: ProductService) { }
  errorMessage = '';
  items: Iitem[] = [];
  imalive(): void {
    this.changeview = !this.changeview;
  }

  set stylevview(value: boolean) {
    this.changeview = value;
  }

  filteredProducts: Iitem[] = [];

  private _listfilter: string = '';

  get listFilter(): string {
    return this.searchQuery.toLocaleLowerCase();
  }

  set listFilter(value: string) {
    this.searchQuery = value;
    this._listfilter = value;
    this.filteredProducts = this.performFilter(value);
    console.log(this._listfilter);
  }

  performFilter(filterBy: string): Iitem[] {
    return this.items.filter((items: Iitem) => items.productname.toLowerCase().includes(this.listFilter));
  }
  filterCateg(filter:string) {
    this.productService.getCategoriesfiltered(filter).subscribe({

      next: products => {

        this.items = products;
        this.filteredProducts = products;
      },
      error: err => this.errorMessage = err
    });
    this.upperlimit = parseInt(sessionStorage.getItem('upperlimit'));

  }
  ngOnInit() {
   this.productService.getProductsFrom(this.profileusername).subscribe({

     next: products => {
       
        this.items = products;
       this.filteredProducts = products;
      },
      error: err => this.errorMessage = err
   });
    this.upperlimit = parseInt(sessionStorage.getItem('upperlimit'));
   
  }

 
  ngOnChanges(changes: SimpleChanges) {
    this._listfilter = this.searchQuery.toLowerCase();
    console.log('In prod from app comp:', this.searchQuery);
    this.filteredProducts = this.performFilter(this.searchQuery);
  }
  searchesoutsidecomponent(gege: string) {
    this.searchQuery = gege;

  }
  showmore() {
    this.upperlimit +=25;
    sessionStorage.removeItem('upperlimit');
    sessionStorage.setItem('upperlimit', this.upperlimit.toString());
  }
}


