import { LatLng } from "leaflet";
import { CartItem } from "./CartItem";

export class Order {
  id!: number;
  name!: string;
  items!: CartItem[];
  totalPrice!: number;
  addressLatLng?: LatLng;
  paymentId!: string;
  createdAt!: string;
  status!: string;
}
