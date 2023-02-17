import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { CartService } from "src/app/services/cart.service";
import { OrderService } from "src/app/services/order.service";
import { UserService } from "src/app/services/user.service";
import { Order } from "src/app/shared/models/Order";

@Component({
  selector: "app-checkout",
  templateUrl: "checkout.component.html",
})
export class CheckoutComponent {
  order: Order = new Order();
  checkoutForm!: FormGroup;

  // Gets the latest cart, then updates the order's items and totalPrice.
  constructor(
    cartService: CartService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
    private orderService: OrderService,
    private router: Router
  ) {
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  // Starts a checkout form with the user's name.
  ngOnInit(): void {
    const { name } = this.userService.currentUser;
    this.checkoutForm = this.formBuilder.group({
      name: [name, [Validators.required, Validators.minLength(3)]],
    });
  }

  // Shortens code size.
  get fc() {
    return this.checkoutForm.controls;
  }

  // Returns an appropriate name error message.
  getNameErrorMessage() {
    if (this.fc.name.hasError("required")) return "Please enter a value";
    else if (this.fc.name.hasError("minlength"))
      return "Name must be at least 3 characters";
    else return "";
  }

  // Submits the order, then redirects to the payment page.
  createOrder() {
    if (this.checkoutForm.invalid) {
      this.toastrService.warning("Please include your name", "Invalid name");
      return;
    }

    if (!this.order.addressLatLng) {
      this.toastrService.warning(
        "Please select your location on the map",
        "Location"
      );
      return;
    }

    this.order.name = this.fc.name.value;

    this.orderService.create(this.order).subscribe({
      next: () => {
        this.router.navigateByUrl("/payment");
      },
      error: (errorResponse) => {
        this.toastrService.error(errorResponse.error, "Cart");
      },
    });
  }
}

