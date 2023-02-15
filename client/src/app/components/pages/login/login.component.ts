import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
})
export class LoginComponent {
  loginForm!: FormGroup;
  isSubmitted = false;
  hide = true;
  returnUrl = "";

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  // Creates a login form.
  // ngOnInit method is called right after Angular sets up this component.
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      // Each key (e.g. email) has an array with an initial value (e.g. ''), and its validator(s).
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });

    // snapshot means the latest value of activatedRoute.
    // queryParams would be all the params after the ?.
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
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

  // Logs in a user.
  submit() {
    this.isSubmitted = true;

    if (this.loginForm.invalid) return;

    this.userService
      .login({
        email: this.fc.email.value,
        password: this.fc.password.value,
      })
      .subscribe(() => {
        this.router.navigateByUrl(this.returnUrl);
      });
  }
}

