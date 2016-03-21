import { Injectable, EventEmitter } from 'angular2/core';

@Injectable()
export default class AuthenticationService {
  userIsloggedIn: EventEmitter<boolean>;

  constructor() {
    this.userIsloggedIn = new EventEmitter();
  }

  login({ username, password }): Promise<boolean> {
    return new Promise(resolve => {
      let validCredentials: boolean = false;

      // @NOTE: In a normal case scenario this check should
      // be performed against a web service, which would return
      // the session token upon validating the user successfully
      if (username === 'john.doe@mail.com' &&
        password === 'letmein') {
        validCredentials = true;
        window.sessionStorage.setItem('token', 'eyJhbGciOi');
      }

      this.userIsloggedIn.emit(validCredentials);
      resolve(validCredentials);
    });
  }

  logout(): Promise<boolean> {
    return new Promise(resolve => {
      window.sessionStorage.removeItem('token');
      this.userIsloggedIn.emit(false);
      resolve(true);
    });
  }

  static isAuthorized(): boolean {
    return !!window.sessionStorage.getItem('token');
  }
}
