import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/partials/navbar/navbar.component";

// Angular Material modules.
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";

import { HomeComponent } from "./components/pages/home/home.component";
import { CartComponent } from "./components/pages/cart/cart.component";
import { ProfileComponent } from "./components/pages/profile/profile.component";
import { LoginComponent } from "./components/pages/login/login.component";
import { OneFoodComponent } from "./components/pages/one-food/one-food.component";
import { SearchComponent } from "./components/partials/search/search.component";
import { TagsComponent } from "./components/partials/tags/tags.component";
import { FooterComponent } from "./components/partials/footer/footer.component";
import { TitleComponent } from "./components/partials/title/title.component";
import { TableComponent } from "./components/partials/table/table.component";
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CartComponent,
    ProfileComponent,
    LoginComponent,
    OneFoodComponent,
    SearchComponent,
    TagsComponent,
    FooterComponent,
    TitleComponent,
    TableComponent,
    CheckoutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

