import { Component, Input } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "navbar.component.html",
})
export class NavbarComponent {
  // Simulates that a user is not logged in.
  @Input() user = false;
}

