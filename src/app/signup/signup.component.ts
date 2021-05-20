import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'signup-box',
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class signupcomponents {

  constructor(private router: Router,
    private route: ActivatedRoute,
  ) { }
  registered() {
    this.router.navigateByUrl('/login');
  }
}
