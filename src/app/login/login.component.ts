import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product/product.service';
import { Iuser } from './Iuser';
import { AppComponent } from '../app.component';

@Component({
  selector: 'login-box',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class logincomponents {
  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private app: AppComponent
  ) { }
  errorMessage;
  account: Iuser[] = [];
  checkifExist(user: string,) {
    this.productService.getProfile(user).subscribe({

      next: profile => {

        this.account = profile;
      },
      error: err => this.errorMessage = err
    });
  }
  authentication() {
    console.log(this.account);
  }
  generatetoken() {

  }
  goDashboard() {
    this.app.signalProduct();
    this.router.navigateByUrl('/product');
    this.app.headertransition();
  }
}
