import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
})
export class LoginComponent {
  loginForm!: FormGroup;
  isSubmitted = false;
  hide = true;

  constructor(private formBuilder: FormBuilder) {}

  // Creates a login form.
  // ngOnInit method is called right after Angular sets up this component.
  // Each key (e.g. email) has an array with an initial value (e.g. ''), and its validator(s).
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  // Shorten code size.
  get fc() {
    return this.loginForm.controls;
  }

  // Returns an appropriate email error message.
  getEmailErrorMessage() {
    if (this.fc.email.hasError("required")) return "Please enter a value";
    else if (this.fc.email.hasError("email")) return "Sorry, not a valid email";
    else return "";
  }

  // Returns an appropriate password error message.
  getPasswordErrorMessage() {
    if (this.fc.password.hasError("required")) return "Please enter a value";
    else return "";
  }

  // Fakes a login form submission by sending an alert.
  submit() {
    this.isSubmitted = true;

    if (this.loginForm.invalid) return;

    alert(`email: ${this.fc.email.value}, password: ${this.fc.password.value}`);
  }
}

