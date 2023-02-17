import { LiveAnnouncer } from "@angular/cdk/a11y";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatSort, Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { CartService } from "src/app/services/cart.service";
import { Cart } from "src/app/shared/models/Cart";
import { CartItem } from "src/app/shared/models/CartItem";

@Component({
  selector: "app-table",
  templateUrl: "table.component.html",
})
export class TableComponent implements AfterViewInit {
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  cart!: Cart;
  cartItems?: CartItem[] = [];
  displayedColumns: string[] = [
    "name",
    "price",
    "quantity",
    "total price",
    "remove item",
  ];
  dataSource = new MatTableDataSource(this.cartItems);

  // Sets the cart observable, the cartItems from the cart observable, and sets the data source with the populated cartItems.
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private cartService: CartService
  ) {
    cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
      this.cartItems = cart.items;
      console.log(this.cartItems);
      this.dataSource = new MatTableDataSource(this.cartItems);
    });
  }

  // Sets the dataSource's sort for mat-sort-header.
  // ngAfterViewInit executes after the component's view is initialized.
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  // Updates the item's quantity in the cart.
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }

  // Removes the item from the cart.
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
  }

  // Announce the change in sort state for assistive technology in English.
  announceSortChange(sortState: Sort) {
    if (sortState.direction)
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    else this._liveAnnouncer.announce("Sorting cleared");
  }
}

