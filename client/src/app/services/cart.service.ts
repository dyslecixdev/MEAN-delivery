import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Cart } from "../shared/models/Cart";
import { CartItem } from "../shared/models/CartItem";
import { Food } from "../shared/models/Food";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  // A BehaviorSubject is an observable that has multiple observers and emits its last value.
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() {}

  // Gets the latest cart.
  getCart(): Cart {
    return this.cartSubject.value;
  }

  // Either gets the cart from local storage, or creates a new cart if none existed.
  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem("Cart");
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }

  // Sets the cart in local storage to persist it.
  private setCartToLocalStorage(): void {
    // Updates the cart's totalPrice and totalQuantity.
    this.cart.totalPrice = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.price,
      0
    );
    this.cart.totalQuantity = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.quantity,
      0
    );

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem("Cart", cartJson);

    // When the cart changes are set in local storage, notify its user.
    this.cartSubject.next(this.cart);
  }

  // Adds a new cartItem to the cart.
  addToCart(food: Food): void {
    let cartItem = this.cart.items.find((item) => item.food.id === food.id);
    if (cartItem) return;

    this.cart.items.push(new CartItem(food));

    this.setCartToLocalStorage();
  }

  // Removes all existing amounts of one cartItem from the cart.
  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter((item) => item.food.id !== foodId);

    this.setCartToLocalStorage();
  }

  // Increments or decrements the price and quantity of an existing cartItem in the cart.
  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.food.id === foodId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;

    this.setCartToLocalStorage();
  }

  // Empties the cart by creating a new empty Cart.
  clearCart() {
    this.cart = new Cart();

    this.setCartToLocalStorage();
  }

  // Gets the cart as an Observable.
  getCartObservable(): Observable<Cart> {
    // asObservable() makes the cartSubject an Observable to prevent changes to the cartSubject outside of this service.
    return this.cartSubject.asObservable();
  }
}

