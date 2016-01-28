import { Injectable, EventEmitter } from 'angular2/core';

@Injectable()
export default class AuthService {
    userLoginStatus: EventEmitter<boolean>;

    constructor() {
        this.userLoginStatus = new EventEmitter();
    }

    login({username, password}): Promise<boolean> {
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

            this.userLoginStatus.emit(validCredentials);
            resolve(validCredentials);
        });
    }

    logout(): Promise<boolean> {
        return new Promise(resolve => {
            window.sessionStorage.removeItem('token');
            this.userLoginStatus.emit(false);
            resolve(true);
        });
    }

    static grantAccess(): boolean {
        return !!window.sessionStorage.getItem('token');
    }
}
