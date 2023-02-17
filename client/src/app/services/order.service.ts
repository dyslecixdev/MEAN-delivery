import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  ORDERS_CREATE_URL,
  ORDERS_NEW_FOR_CURRENT_USER_URL,
  ORDERS_PAY_URL,
  ORDERS_TRACK_URL,
  ORDERS_URL,
} from "../shared/constants/urls";
import { Order } from "../shared/models/Order";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  constructor(private http: HttpClient) {}

  // Creates an order.
  create(order: Order) {
    return this.http.post<Order>(ORDERS_CREATE_URL, order);
  }

  // Gets the user's order as an observable.
  getNewOrderForCurrentUser(): Observable<Order> {
    return this.http.get<Order>(ORDERS_NEW_FOR_CURRENT_USER_URL);
  }

  // Sends the order to be paid.
  pay(order: Order): Observable<string> {
    return this.http.post<string>(ORDERS_PAY_URL, order);
  }

  // Gets the user's order by its id.
  trackOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(ORDERS_TRACK_URL + id);
  }
}
