import { Component } from "@angular/core";
import { FoodService } from "src/app/services/food.service";
import { Tag } from "src/app/shared/models/Tags";

@Component({
  selector: "app-tags",
  templateUrl: "tags.component.html",
})
export class TagsComponent {
  tags?: Tag[];

  // Gets all the tags.
  constructor(foodService: FoodService) {
    this.tags = foodService.getAllTags();
  }
}

