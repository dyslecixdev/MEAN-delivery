import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CartService } from "src/app/services/cart.service";
import { UserService } from "src/app/services/user.service";
import { CartItem } from "src/app/shared/models/CartItem";
import { User } from "src/app/shared/models/User";

@Component({
  selector: "app-navbar",
  templateUrl: "navbar.component.html",
})
export class NavbarComponent {
  cartItems: CartItem[] = [];
  cartPrice = 0;
  cartQuantity = 0;
  user!: User;

  // Gets the cart and user as an observable.
  constructor(
    private cartService: CartService,
    private router: Router,
    private userService: UserService
  ) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartItems = newCart.items;
      this.cartPrice = newCart.totalPrice;
      this.cartQuantity = newCart.totalQuantity;
    });

    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    });
  }

  // Clears the cart then redirects to the home page.
  clearCart() {
    this.cartService.clearCart();

    this.router.navigateByUrl("home");
  }

  // Logs out a user.
  logout() {
    this.userService.logout();
  }

  // Gets the user's token.
  get isAuth() {
    return this.user.token;
  }
}

