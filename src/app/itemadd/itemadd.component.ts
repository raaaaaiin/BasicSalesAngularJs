import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iitem } from '../product/itemI';
import { ProductService } from '../product/product.service';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'itemadd-wall',
  templateUrl: './itemadd.html',
  styleUrls: ['./itemadd.css']
})

export class itemaddComponent implements OnInit{
  pageTitle: string = 'Product Wall'
  errorMessage = '';
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private app: AppComponent  ) { }
  product: Iitem | undefined;

  backProduct() {
    this.router.navigate(['/dashboard']);
  }
  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');

   
  }

 

}


