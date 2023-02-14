import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FoodService } from "src/app/services/food.service";
import { Food } from "src/app/shared/models/Food";

@Component({
  selector: "app-one-food",
  templateUrl: "one-food.component.html",
})
export class OneFoodComponent {
  food!: Food;

  // Gets on food by its foodId from the url.
  constructor(activatedRoute: ActivatedRoute, foodService: FoodService) {
    activatedRoute.params.subscribe((params) => {
      if (params.foodId) this.food = foodService.getFoodById(params.foodId);
    });
  }
}

