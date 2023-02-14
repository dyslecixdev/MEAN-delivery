import { Injectable } from "@angular/core";
import { sample_foods, sample_tags } from "src/data";
import { Food } from "../shared/models/Food";
import { Tag } from "../shared/models/Tags";

@Injectable({
  providedIn: "root",
})
export class FoodService {
  constructor() {}

  // Gets the sample_foods array object.
  getAllFoods(): Food[] {
    return sample_foods;
  }

  // Gets specific food objects based on the searchTerm.
  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAllFoods().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Gets the sample_tags array object.
  getAllTags(): Tag[] {
    return sample_tags;
  }

  // Gets specific food objects based on its tag.
  getAllFoodsByTag(tag: string): Food[] {
    return tag === "All"
      ? this.getAllFoods()
      : // tags? checks if tag is included in it.
        this.getAllFoods().filter((food) => food.tags?.includes(tag));
  }
}

