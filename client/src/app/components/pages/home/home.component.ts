import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FoodService } from "src/app/services/food.service";
import { Food } from "src/app/shared/models/Food";

@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
})
export class HomeComponent {
  cols = 3;
  foods: Food[] = [];

  // Populates the food array with either all or some of the object in the sample_foods array from data.ts.
  // constructor method is called whenever we create new objects.
  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.foods = this.foodService.getAllFoodsBySearchTerm(
          params.searchTerm
        );
      else if (params.tag)
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      else this.foods = foodService.getAllFoods();
    });
  }

  // Changes the number of columns based on viewport.
  // Executes this function when the component is initialized.
  ngOnInit() {
    if (window.innerWidth <= 540) this.cols = 1;
    else if (window.innerWidth <= 800) this.cols = 2;
    else if (window.innerWidth <= 1050) this.cols = 3;
    else this.cols = 4;
  }

  // Changes the number of columns based on viewport.
  onResize(event: number) {
    console.log(event);
    if (window.innerWidth <= 540) this.cols = 1;
    else if (window.innerWidth <= 800) this.cols = 2;
    else if (window.innerWidth <= 1050) this.cols = 3;
    else this.cols = 4;
  }
}

