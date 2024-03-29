import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) {}

  getItems() {
    return this.items;
  }
  addItem(product: Product) {
    this.items.push(product);
  }
  clearItems() {
    this.items = [];
    return this.items;
  }
  getTotalPrice() {
    let total = 0;
    this.items.forEach((item) => (total += item.price));
    return total;
  }
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
