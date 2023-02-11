import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-navbar></app-navbar>
    <!-- router-outlet is everything below the navbar (e.g. home page) -->
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = "codecamp-mean-ecommerce";
}

