import { Component } from '@angular/core';

@Component({
  selector: 'image-slide',
  templateUrl: './imageslide.html'
})
export class imageslideComponent {
  imageObject = [{
    image: 'assets/banners/e-com-banner-1.jpg',
    thumbImage: 'assets/banners/e-com-banner-1.jpg',
  }, {
      image: 'assets/banners/e-com-banner-2.jpg',
      thumbImage: 'assets/banners/e-com-banner-2.jpg',
    }, {
      image: 'assets/banners/e-com-banner-3.jpg',
      thumbImage: 'assets/banners/e-com-banner-3.jpg',
  }, {
      image: 'assets/banners/e-com-banner-4.jpg',
      thumbImage: 'assets/banners/e-com-banner-4.jpg',
  }, {
      image: 'assets/banners/e-com-banner-5.jpg',
      thumbImage: 'assets/banners/e-com-banner-5.jpg',
  }];
}
