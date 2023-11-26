import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../cv/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productCounter: number = 0;

  constructor(
    private productService: ProductService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    if (this.productCounter >= 100) {
      this.toastr.info('No more products to display');
      return;
    }
    this.productService.getProductInfo().subscribe(
      (response) => {
        this.products = this.products.concat(response.products);
        this.productCounter = this.products.length;
      },
      (error) => {
        this.toastr.error('Le fetch api a échoué');
      }
    );
  }
}
