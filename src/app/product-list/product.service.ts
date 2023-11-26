import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInfo } from '../cv/model/productInfo';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';
  private pageSize = 12;
  private currentPage = 1;

  constructor(private http: HttpClient) {}

  getProductInfo(): Observable<ProductInfo> {
    const url = `${this.apiUrl}?limit=${this.pageSize}&skip=${
      (this.currentPage - 1) * this.pageSize
    }`;
    this.currentPage++;
    return this.http.get<ProductInfo>(url);
  }
}
