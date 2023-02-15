import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
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
    let foodsObservable: Observable<Food[]>;

    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        foodsObservable = this.foodService.getAllFoodsBySearchTerm(
          params.searchTerm
        );
      else if (params.tag)
        foodsObservable = this.foodService.getAllFoodsByTag(params.tag);
      else foodsObservable = foodService.getAllFoods();

      foodsObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      });
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
    if (window.innerWidth <= 540) this.cols = 1;
    else if (window.innerWidth <= 800) this.cols = 2;
    else if (window.innerWidth <= 1050) this.cols = 3;
    else this.cols = 4;
  }
}

