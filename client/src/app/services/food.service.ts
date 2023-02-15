import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  FOODS_BY_ID_URL,
  FOODS_BY_SEARCH_URL,
  FOODS_BY_TAG_URL,
  FOODS_TAGS_URL,
  FOODS_URL,
} from "../shared/constants/utils";
import { Food } from "../shared/models/Food";
import { Tag } from "../shared/models/Tags";

@Injectable({
  providedIn: "root",
})
export class FoodService {
  // HttpClient allows the client to communicate with the server.
  constructor(private http: HttpClient) {}

  // Gets the sample_foods array object.
  // http cannot send data as raw type (e.g. Food[]), but only as an observable (e.g. Observable<Food[]>).
  getAllFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  }

  // Gets specific food objects based on the searchTerm.
  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  // Gets the sample_tags array object.
  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  // Gets specific food objects based on its tag.
  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag === "All"
      ? this.getAllFoods()
      : this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }

  // Gets one food object by its id.
  getFoodById(foodId: string): Observable<Food> {
    return this.http.get<Food>(FOODS_BY_ID_URL + foodId);
  }
}

