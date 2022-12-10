import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ProductCardPage } from '../model/productCard.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsEndpoint: string =
    'http://localhost:8080/api/v1/product-card';
  constructor(private http: HttpClient) {}

  getProducts(
    page: number,
    size: number,
    category: string | undefined
  ): Observable<ProductCardPage> {
    let httpParams = new HttpParams().set('page', page).set('size', size);
    if (typeof category != 'undefined') {
      httpParams = httpParams.set('category', category);
    }
    return this.http
      .get<ProductCardPage>(this.productsEndpoint, {
        params: httpParams,
        responseType: 'json',
      })
      .pipe(
        catchError(this.handleError<ProductCardPage>('getProducts', undefined))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
