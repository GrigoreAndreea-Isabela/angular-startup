import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: any[];
  totalPrice: number;
  checkoutForm: FormGroup;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.totalPrice = this.cartService.getTotalPrice();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  onSubmit(): void {
    this.items = this.cartService.clearItems();
    console.warn('Your order has been submitted ! ', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
