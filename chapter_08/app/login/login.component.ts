import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
import { Router } from '@angular/router-deprecated';
import { AuthenticationService } from '../shared/shared';

@Component({
  selector: 'pomodoro-login',
  templateUrl: 'app/login/login.component.html'
})
export default class LoginComponent {
  loginForm: ControlGroup;
  notValidCredentials: boolean = false;
  showUsernameHint: boolean = false;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, this.emailValidator])],
      password: ['', Validators.required]
    });

    const username = this.loginForm.controls['username'];
    username.valueChanges.subscribe(value => {
      this.showUsernameHint = (username.dirty && value.indexOf('@') < 0);
    });

  }

  private emailValidator(control: Control): { [key: string]: boolean } {
    if (!/(.+)@(.+){2,}\.(.+){2,}/.test(control.value)) {
      return {
        'emailNotValid': true
      };
    }

    return null;
  }

  authenticate() {
    let credentials: any = this.loginForm.value;
    this.notValidCredentials = !this.loginForm.valid && this.loginForm.dirty;

    this.authenticationService.login(credentials).then(success => {
      if (success) {
        this.router.navigateByUrl('/');
      } else {
        this.notValidCredentials = true;
      }
    });
  }
}
