import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn: boolean = false;
  constructor() {
    if (localStorage.getItem("loggedIn")) this.isLoggedIn = true;
    else this.isLoggedIn = false;

  }
}
