import { Component } from 'angular2/core';
import { FormBuilder, ControlGroup, Validators, Control } from 'angular2/common';
import { Router } from 'angular2/router';
import { AuthenticationService } from '../shared/shared';

@Component({
  selector: 'pomodoro-login',
  templateUrl: 'app/login/login.component.html'
})
export default class LoginComponent {
  loginForm: ControlGroup;
  showAlert: boolean = false;
  showUsernameHint: boolean = false;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, this.usernameValidator])],
      password: ['', Validators.required]
    });

    const username = this.loginForm.controls['username'];
    username.valueChanges.subscribe(value => {
      this.showUsernameHint = (username.dirty && value.indexOf('@') < 0);
    });

  }

  private usernameValidator(control: Control): { [key: string]: boolean } {
    if (!/(.+)@(.+){2,}\.(.+){2,}/.test(control.value)) {
      return {
        'emailNotValid': true
      };
    }

    return null;
  }

  authenticate() {
    this.showAlert = !this.loginForm.valid && this.loginForm.dirty;
    let credentials: any = this.loginForm.value;

    this.authenticationService.login(credentials).then(success => {
      if (success) {
        this.router.navigateByUrl('/');
      } else {
        this.showAlert = true;
      }
    });
  }
}
