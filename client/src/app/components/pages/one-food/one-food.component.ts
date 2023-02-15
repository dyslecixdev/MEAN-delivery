import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CartService } from "src/app/services/cart.service";
import { FoodService } from "src/app/services/food.service";
import { Food } from "src/app/shared/models/Food";

@Component({
  selector: "app-one-food",
  templateUrl: "one-food.component.html",
})
export class OneFoodComponent {
  food!: Food;

  // Gets on food by its foodId from the url.
  constructor(
    activatedRoute: ActivatedRoute,
    foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.foodId)
        foodService.getFoodById(params.foodId).subscribe((serverFood) => {
          this.food = serverFood;
        });
    });
  }

  // Adds the food to the cart, then redirects to the Home page.
  addToCart() {
    this.cartService.addToCart(this.food);

    this.router.navigateByUrl("home");
  }
}

