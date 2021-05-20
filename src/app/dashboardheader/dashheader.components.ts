import { Component,Output,EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Iitem } from '../product/itemI';
import { productcomponents } from '../product/product.component';



@Component({
  selector: 'dahboardhd-root',
  templateUrl: './dashheader.html',
  styleUrls: ['./dashheader.css']
})
export class dashheadComponent {
  viewchange: boolean = true;
  profilepic: string = "../assets/user/Raineer.jpg";
  filtersrc: string = "../assets/filter.png";
  listviewsrc: string = "../assets/listview.png";
  gridviewsrc: string = "../assets/gridview.png";
  defaultselection: string = this.listviewsrc;
 
  changetolist(): void {
    this.defaultselection = this.listviewsrc;
  }
  changetogrid(): void {
    this.defaultselection = this.gridviewsrc;
  }
  @Output() clicklogoEvent = new EventEmitter<boolean>();
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productcomponents: productcomponents,
    private App: AppComponent,
    ) { }

  sendData() {
    this.clicklogoEvent.emit(this.viewchange);
    if (this.viewchange) {
      this.changetogrid();
    } else {
      this.changetolist();
    }
    this.viewchange = !this.viewchange;
  }
  clicklogout() {
    this.App.headertransition();
  }
  @Output() searchQuery = new EventEmitter<string>();
  filteredProducts: Iitem[] = [];
  private _listfilter: string = '';
  clickProductAction: boolean = true;
  @Output() clickProduct = new EventEmitter<boolean>();
  clickproducttab() {
    this.App.signalProduct();
  }
  clicksignup() {
    this.clickProductAction = false;
    this.clickProductevent();
  }

  clickProductevent() {
    this.clickProduct.emit(this.clickProductAction);
  }

  set listFilter(value: string) {
    this._listfilter = value;
    this.searchQuery.emit(this._listfilter);
    
  }
  ngOnInit() {
    sessionStorage.setItem('upperlimit', '50');
  }
  home() {
    sessionStorage.duplicopy = 0;
  }
  focus: boolean = true;
  hide(signal: boolean): void {
    this.focus = signal;
  }


}
