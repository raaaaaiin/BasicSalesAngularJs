import { Component } from '@angular/core';
import { Icateg } from './Icateg';
import { ProductService } from '../product/product.service';
import { productcomponents } from '../product/product.component';


@Component({
  selector: 'categ-box',
  templateUrl: './categboxes.html',
  styleUrls: ['./categboxes.css']
})

export class categboxesComponent {
  categBox: Icateg[] = [];
  errorMessage;
  changes(categ : string) {

  }
  constructor(private productService: ProductService,
private productComp : productcomponents  ) { }
  ngOnInit() {
    this.productService.getCategories().subscribe({
      next: Categories => {
        this.categBox = Categories;
        
      },
      error: err => this.errorMessage = err
    });
    console.log();
  }
  changeFilterCateg(filter:string) {
    this.productComp.filterCateg(filter);
  }
}
