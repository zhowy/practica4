// src/app/services/products/products.spec.ts

import { TestBed } from '@angular/core/testing';

// ¡IMPORTACIÓN CORREGIDA! Ahora importamos 'ProductsService'
import { ProductsService } from './products.service'; // Asegúrate que la ruta sea correcta a products.service.ts

describe('ProductsService', () => { // ¡RENOMBRADO el bloque describe para reflejar el nombre del servicio!
  let service: ProductsService; // ¡Tipo de la variable 'service' corregido a ProductsService!

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // ¡Inyección CORREGIDA! Inyectamos ProductsService
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Puedes añadir más pruebas aquí, por ejemplo:
  it('should return all products', () => {
    // Asumiendo que tu servicio tiene un método getAllProducts()
    const products = service.getAllProducts();
    expect(products.length).toBeGreaterThan(0); // Espera que haya al menos un producto
    expect(products[0].nombre).toBe('Corvette ZR1'); // Espera que el primer producto sea el esperado
  });

  it('should return a product by ID', () => {
    const product = service.getProductById(1);
    expect(product).toBeDefined();
    expect(product?.nombre).toBe('Corvette ZR1');

    const nonExistentProduct = service.getProductById(999);
    expect(nonExistentProduct).toBeUndefined();
  });
});

