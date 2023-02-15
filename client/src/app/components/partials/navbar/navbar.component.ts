import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { CartService } from "src/app/services/cart.service";
import { CartItem } from "src/app/shared/models/CartItem";

@Component({
  selector: "app-navbar",
  templateUrl: "navbar.component.html",
})
export class NavbarComponent {
  // Simulates that a user is not logged in.
  @Input() user = false;

  cartItems: CartItem[] = [];
  cartPrice = 0;
  cartQuantity = 0;

  // Gets the cart as an observable.
  constructor(private cartService: CartService, private router: Router) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartItems = newCart.items;
      this.cartPrice = newCart.totalPrice;
      this.cartQuantity = newCart.totalQuantity;
    });
  }

  // Clears the cart then redirects to the home page.
  clearCart() {
    this.cartService.clearCart();

    this.router.navigateByUrl("home");
  }
}

