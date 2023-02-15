import { Component, Input } from "@angular/core";

@Component({
  selector: "app-not-found",
  templateUrl: "not-found.component.html",
})
export class NotFoundComponent {
  @Input() visible = false;
  @Input() notFoundMessage = "Nothing Found!";
  @Input() resetLinkText = "Reset";
  @Input() resetLinkRoute = "/";
}

