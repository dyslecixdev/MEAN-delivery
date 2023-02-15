import { Food } from "./Food";

export class CartItem {
  // public means this variable is accesible outside of this class.
  constructor(public food: Food) {}
  name: string = this.food.name;
  price: number = this.food.price;
  quantity: number = 1;
}
