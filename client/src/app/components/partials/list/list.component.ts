import { Component } from "@angular/core";
import { CartService } from "src/app/services/cart.service";
import { Cart } from "src/app/shared/models/Cart";
import { CartItem } from "src/app/shared/models/CartItem";

@Component({
  selector: "app-list",
  templateUrl: "list.component.html",
})
export class ListComponent {
  panelOpenState = false;
  cartItems?: CartItem[] = [];
  cart!: Cart;

  constructor(private cartService: CartService) {
    cartService.getCartObservable().subscribe((cart) => {
      this.cartItems = cart.items;
      this.cart = cart;
      console.log(this.cart);
    });
  }
}

