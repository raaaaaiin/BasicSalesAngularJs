import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iitem } from '../product/itemI';
import { ProductService } from '../product/product.service';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'prod-wall',
  templateUrl: './productwall.html',
  styleUrls: ['./productwall.css']
})

export class productwallComponent implements OnInit{
  pageTitle: string = 'Product Wall'
  errorMessage = '';
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private app: AppComponent  ) { }
  //product: Iitem | undefined;

  items: Iitem[] = [];

  backProduct() {
    this.app.signalProduct();
    this.router.navigate(['/products']);
  }
 ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');

    if (param) {
      const id = +param;
      this.getProduct(id);
    }
    sessionStorage.duplicopy = sessionStorage.Duplicate
  }


  getProduct(id:number) {
    this.productService.getWallProducts(id).subscribe({
      next: products => {
        this.items = products;
      },
      error: err => this.errorMessage = err
    });
  }

 /* getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  } */


  /*onBack(): void {
    this.router.navigate(['/products']);
  }*/
}


