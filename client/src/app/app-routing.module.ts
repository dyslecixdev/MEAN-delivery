import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./components/pages/cart/cart.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { LoginComponent } from "./components/pages/login/login.component";
import { ProfileComponent } from "./components/pages/profile/profile.component";

const routes: Routes = [
  {
    path: "home",
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
  // Redirects from an empty string (viz. '/') to home.
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

