import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { USERS_LOGIN_URL, USERS_REGISTER_URL } from "../shared/constants/urls";
import { IUserLogin } from "../shared/interfaces/IUserLogin";
import { IUserRegister } from "../shared/interfaces/IUserRegister";
import { User } from "../shared/models/User";

const USER_KEY = "User";

@Injectable({
  providedIn: "root",
})
export class UserService {
  // BehaviorSubject is a subject (i.e. a special type of observable) that needs an initial value, and always returns a value on subscription.
  private userSubject = new BehaviorSubject<User>(
    this.getUserFromLocalStorage()
  );
  public userObservable: Observable<User>;

  // Sets the userObservable as the read only version of the userSubject.
  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  // Returns a user observable when logging in, then adds it to local storage along with showing a toastr message.
  // IUserLogin indicates it is an interface (Note: an interface cannnot create a new instance [e.g. new User()] like a class can).
  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USERS_LOGIN_URL, userLogin).pipe(
      // Using .subscribe() changes the return type to subscription, so instead uses .pipe(tap()) to retain the return as an observable.
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to Pizzazz, ${user.name}!`,
            "Login Successful"
          );
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, "Login Failed");
        },
      })
    );
  }

  // Returns a user observable when registering, then adds it to local storage along with showing a toastr message.
  register(userRegister: IUserRegister): Observable<User> {
    return this.http.post<User>(USERS_REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to Pizzazz, ${user.name}`,
            "Register Successful"
          );
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, "Register Failed");
        },
      })
    );
  }

  // Persists the user in local storage.
  private setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  // Gets the user from local storage.
  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);

    if (userJson) return JSON.parse(userJson) as User;
    return new User();
  }

  // Logs out by overwriting the userSubject with an empty User model, removing the user from local storage, then reloading the page.
  logout() {
    this.userSubject.next(new User());

    localStorage.removeItem(USER_KEY);

    window.location.reload();
  }
}

