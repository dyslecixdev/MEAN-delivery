import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/guards/auth.guard";
import { CartComponent } from "./components/pages/cart/cart.component";
import { CheckoutComponent } from "./components/pages/checkout/checkout.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { LoginComponent } from "./components/pages/login/login.component";
import { OneFoodComponent } from "./components/pages/one-food/one-food.component";
import { PaymentComponent } from "./components/pages/payment/payment.component";
import { ProfileComponent } from "./components/pages/profile/profile.component";
import { RegisterComponent } from "./components/pages/register/register.component";

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
  {
    path: "checkout",
    component: CheckoutComponent,
    // Redirect away from this page if the canActivate on AuthGuard returns false.
    canActivate: [AuthGuard],
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "payment",
    component: PaymentComponent,
    canActivate: [AuthGuard],
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

