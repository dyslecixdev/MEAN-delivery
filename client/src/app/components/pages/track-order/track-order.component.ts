import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OrderService } from "src/app/services/order.service";
import { Order } from "src/app/shared/models/Order";
import { User } from "src/app/shared/models/User";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-track-order",
  templateUrl: "track-order.component.html",
})
export class TrackOrderComponent {
  order!: Order;
  user!: User;
  panelOpenState = false;

  constructor(
    activatedRoute: ActivatedRoute,
    orderService: OrderService,
    userService: UserService
  ) {
    const params = activatedRoute.snapshot.params;
    if (!params.orderId) return;

    orderService.trackOrderById(params.orderId).subscribe((order) => {
      this.order = order;
    });
  }
}

