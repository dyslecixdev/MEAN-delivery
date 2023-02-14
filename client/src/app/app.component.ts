import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <!--NAVBAR-->
    <app-navbar></app-navbar>

    <!-- router-outlet is everything below the navbar (e.g. home page) -->
    <router-outlet></router-outlet>

    <!--FOOTER-->
    <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent {
  title = "codecamp-mean-ecommerce";
}

