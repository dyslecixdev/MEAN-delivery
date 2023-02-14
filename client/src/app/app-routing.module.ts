import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./components/pages/cart/cart.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { LoginComponent } from "./components/pages/login/login.component";
import { OneFoodComponent } from "./components/pages/one-food/one-food.component";
import { ProfileComponent } from "./components/pages/profile/profile.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "search/:searchTerm",
    component: HomeComponent,
  },
  {
    path: "tag/:tag",
    component: HomeComponent,
  },
  {
    path: "cart",
    component: CartComponent,
  },
  {
    path: "profile",
    component: ProfileComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "food/:foodId",
    component: OneFoodComponent,
  },
  // Redirects from an empty string home to an empty string (viz. "/").
  {
    path: "home",
    redirectTo: "",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

