// src/app/pages/product-detail/product-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsService, Product } from '../../services/products.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  producto: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productIdString = params.get('id');
      if (productIdString) {
        const productIdNumber = parseInt(productIdString, 10);
        this.productsService.getProductById(productIdNumber).subscribe(producto => {
          this.producto = producto;
        });
      }
    });
  }
}
