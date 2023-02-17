import { Component, Input } from "@angular/core";

@Component({
  selector: "app-title",
  templateUrl: "title.component.html",
})
export class TitleComponent {
  @Input() title!: string;
  @Input() fontSize?: string = "3.75rem";
}

