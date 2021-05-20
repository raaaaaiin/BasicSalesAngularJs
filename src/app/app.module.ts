import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.components';
import { productcomponents } from './product/product.component';
import { wallComponent } from './wall/wall.components';
import { footerComponents } from './footer/footer.component';
import { NgImageSliderModule } from 'ng-image-slider'
import { imageslideComponent } from './imageslide/imageslide.component';
import { categboxesComponent } from './categboxes/categboxes.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { productwallComponent } from './itemwall/productwall.component';
import { logincomponents } from './login/login.component';
import { signupcomponents, } from './signup/signup.component';
import { itemaddComponent } from './itemadd/itemadd.component';
import { aboutComponent } from './aboutme/about.component';
import { dashheadComponent } from './dashboardheader/dashheader.components';
import { dashboardproductComponent } from './dashboardproduct/dashboardproduct';
import { dashboardprofileComponent } from './dashboardprofile/dashboardprofile.component';
import { productwalleditComponent } from './itemwalledit/productwalledit';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    wallComponent,
    productcomponents,
    footerComponents,
    imageslideComponent,
    categboxesComponent,
    productwallComponent,
    logincomponents,
    signupcomponents,
    itemaddComponent,
    aboutComponent,
    dashheadComponent,
    dashboardproductComponent,
    dashboardprofileComponent,
    productwalleditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgImageSliderModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'product', component: itemaddComponent},
      { path: 'product/:id', component: productwallComponent },
      { path: 'login', component: logincomponents },
      { path: 'signup', component: signupcomponents, },
      { path: 'about', component: aboutComponent, },
      { path: 'dashboard', component: dashboardproductComponent, },
      { path: 'dashboard/productadd', component: itemaddComponent, },
      { path: 'dashboard/:id', component: productwalleditComponent },
      { path: 'assets/products/products.json', redirectTo: 'product', pathMatch: 'full' },
      { path: '', redirectTo: 'product', pathMatch:'full' },
      { path: '**', redirectTo: 'product', pathMatch: 'full' }

    ],)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
