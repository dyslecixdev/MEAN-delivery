import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { map, Observable, startWith } from "rxjs";

@Component({
  selector: "app-search",
  templateUrl: "search.component.html",
})
export class SearchComponent {
  searchTerm = "";
  // FormControl is a built-in class that gets and sets values, and validates form control fields.
  optionsControl = new FormControl("");
  options: string[] = ["Pizza", "Salad", "Bread"];
  // An Observable is a stream of events or data.
  filteredOptions!: Observable<string[]>;

  // Sets the search term.
  // ActivatedRoute is the information about the route (e.g. activatedRoute.params in /search/pizza is pizza).
  // private signifies that router is available throughout the entire SearchComponent class rather than only this constructor.
  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) this.searchTerm = params.searchTerm;
    });
  }

  // Populates the filteredOptions array with the options array.
  // valueChanges is an event that returns an observable whenever FormControl changes.
  ngOnInit() {
    this.filteredOptions = this.optionsControl.valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value || ""))
    );
  }

  // Returns the filterValue if it exists inside the options array.
  _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  // Navigates to the url route using the given term.
  // void means this method does not return anything.
  search(term: string): void {
    if (term) this.router.navigateByUrl("/search/" + term);
  }
}

