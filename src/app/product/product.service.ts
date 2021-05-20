import { Injectable } from '@angular/core';
import { Iitem } from './itemI';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Icateg } from '../categboxes/Icateg';
import { Iuser } from '../login/Iuser';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'localhost:3000/Products.json';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Iitem[]> {
    const productUrl = 'http://localhost:3000/products';
    return this.http.get<Iitem[]>(productUrl);
  }

  getProductsFrom(name: string): Observable<Iitem[]> {
    const productUrl = 'http://localhost:3000/products?uploader=' + name;
    return this.http.get<Iitem[]>(productUrl);
  }

  getProfile(name: string): Observable<Iuser[]> {
    const productUrl = 'http://localhost:3000/profile?name=' + name;
    return this.http.get<Iuser[]>(productUrl);
  }

  getWallProducts(id: number): Observable<Iitem[]> {
    const productUrl = 'http://localhost:3000/products?id=' + id;
    return this.http.get<Iitem[]>(productUrl);
  }
  getCategories(): Observable<Icateg[]> {
    const productUrl = 'http://localhost:3000/Categories';
    return this.http.get<Icateg[]>(productUrl);
  }
  getCategoriesfiltered(filter: string): Observable<Iitem[]> {
    const productUrl = 'http://localhost:3000/products?categoryName=' + filter;
    return this.http.get<Iitem[]>(productUrl);
  }
  getProducts(): Observable<Iitem[]> {
    return this.http.get<Iitem[]>(this.productUrl).pipe(tap(data => console.log('All:', JSON.stringify(data))),
      catchError(this.handleError)
    );

  }
  getProduct(id: number): Observable<Iitem | undefined> {
    return this.getProducts()
      .pipe(
        map((products: Iitem[]) => products.find(p => p.id === id)),
        catchError(this.handleError)
      );
  }


  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

