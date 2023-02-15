import { Component } from "@angular/core";
import { CartService } from "src/app/services/cart.service";
import { Cart } from "src/app/shared/models/Cart";
import { CartItem } from "src/app/shared/models/CartItem";

@Component({
  selector: "app-cart",
  templateUrl: "cart.component.html",
})
export class CartComponent {
  cart!: Cart;

  // Gets the cart as an observable.
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }
}

