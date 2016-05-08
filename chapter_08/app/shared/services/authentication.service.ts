import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export default class AuthenticationService {
  userIsloggedIn: EventEmitter<boolean>;

  constructor(public http: Http) {
    this.userIsloggedIn = new EventEmitter();
  }

  login({ username, password }): Promise<boolean> {
    return new Promise(resolve => {
      let validCredentials: boolean = false;

      // @NOTE: In a normal case scenario this check should
      // be performed against a web service, which would return
      // the session token upon validating the user successfully
      // Please refer to {@link httpLogin()}.
      if (username === 'john.doe@mail.com' &&
        password === 'letmein') {
        validCredentials = true;
        window.sessionStorage.setItem('token', 'eyJhbGciOi');
      }

      this.userIsloggedIn.emit(validCredentials);
      resolve(validCredentials);
    });
  }

  httpLogin(credentials): Promise<boolean> {
    return new Promise(resolve => {

      const url = '/api/authentication'; // Or your own API Auth url
      const body = JSON.stringify(credentials);
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers });

      this.http.post(url, body, options)
        .map(response => response.json())
        .subscribe(authResponse => {
            let validCredentials: boolean = false;

            if(authResponse && authResponse.token) {
              validCredentials = true;
              window.sessionStorage.setItem('token', authResponse.token);
            }

            this.userIsloggedIn.emit(validCredentials);
            resolve(validCredentials);
          },
          error => console.log(error)
        );
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
