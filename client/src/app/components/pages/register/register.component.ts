import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { IUserRegister } from "src/app/shared/interfaces/IUserRegister";
import { PasswordsMatchValidator } from "src/app/shared/validators/password_match_validators";

@Component({
  selector: "app-register",
  templateUrl: "register.component.html",
})
export class RegisterComponent {
  registerForm!: FormGroup;
  isSubmitted = false;
  hide = true;
  returnUrl = "";

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  // Creates a register form while checking if password and confirmPassword match.
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: ["", [Validators.required, Validators.minLength(3)]],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", Validators.required],
      },
      {
        validators: PasswordsMatchValidator("password", "confirmPassword"),
      }
    );

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  // Shortens code size.
  get fc() {
    return this.registerForm.controls;
  }

  // Returns an appropriate name error message.
  getNameErrorMessage() {
    if (this.fc.name.hasError("required")) return "Please enter a value";
    else if (this.fc.name.hasError("minlength"))
      return "Name must be at least 3 characters";
    else return "";
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
    else if (this.fc.password.hasError("minlength"))
      return "Password must be at least 8 characters";
    else return "";
  }

  // Returns an appropriate confirm password error message.
  getConfirmPasswordErrorMessage() {
    if (this.fc.confirmPassword.hasError("required"))
      return "Please enter a value";
    else if (this.fc.password !== this.fc.confirmPassword)
      return "Password and confirm password must match";
    else return "";
  }

  // Registers a user.
  submit() {
    this.isSubmitted = true;

    if (this.registerForm.invalid) return;

    const fv = this.registerForm.value;
    const user: IUserRegister = {
      name: fv.name,
      email: fv.email,
      password: fv.password,
      confirmPassword: fv.confirmPassword,
    };

    this.userService.register(user).subscribe((_) => {
      this.router.navigateByUrl(this.returnUrl);
    });
  }
}

