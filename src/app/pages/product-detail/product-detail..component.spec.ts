// src/app/pages/product-detail/product-detail.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ProductDetailComponent } from './product-detail.component';
import { ProductsService, Product } from '../../services/products.service';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let mockProductsService: jasmine.SpyObj<ProductsService>;
  let mockActivatedRoute: any;

  const testProduct: Product = {
    id: 1,
    nombre: 'Corvette ZR1',
    descripcion: 'Potente y elegante',
    precio: 184500,
    imagen: '/img/CorvetteZR1.jpg'
  };

  beforeEach(async () => {
    mockProductsService = jasmine.createSpyObj('ProductsService', ['getProductById']);
    mockProductsService.getProductById.and.returnValue(of(testProduct)); // 👈 observable, no objeto directo

    mockActivatedRoute = {
      paramMap: of({
        get: (key: string) => {
          if (key === 'id') {
            return '1';
          }
          return null;
        }
      })
    };

    await TestBed.configureTestingModule({
      imports: [ProductDetailComponent], // si es standalone
      providers: [
        { provide: ProductsService, useValue: mockProductsService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load product details based on route ID', () => {
    expect(mockProductsService.getProductById).toHaveBeenCalledWith(1);
    expect(component.producto).toEqual(testProduct);
  });

  it('should set producto to undefined if no ID is found', () => {
    const mockActivatedRouteNoId = {
      paramMap: of({
        get: (key: string) => null
      })
    };

    TestBed.overrideProvider(ActivatedRoute, { useValue: mockActivatedRouteNoId });

    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(mockProductsService.getProductById).not.toHaveBeenCalled();
    expect(component.producto).toBeUndefined();
  });
});
