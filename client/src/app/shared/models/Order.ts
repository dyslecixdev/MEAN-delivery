import { CartItem } from "./CartItem";

export class Order {
  id!: number;
  name!: string;
  items!: CartItem[];
  totalPrice!: number;
  address!: string;
  paymentId!: string;
  createdAt!: string;
  status!: string;
}
