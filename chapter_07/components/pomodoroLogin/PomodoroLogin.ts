import { Component } from 'angular2/core';
import { FormBuilder, ControlGroup, Validators, Control } from 'angular2/common';
import { Router } from 'angular2/router';
import { AuthService } from '../../services/services';

@Component({
    selector: 'pomodoro-login',
    templateUrl: 'components/pomodoroLogin/template.html'
})
export default class PomodoroLogin {
    loginForm: ControlGroup;
    showAlert: boolean = false;
    showUsernameHint: boolean = false;

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthService) {
            this.loginForm = formBuilder.group({
                username: ['', Validators.compose([Validators.required, this.validateUsername])],
                password: ['', Validators.required]
            });

            const username = this.loginForm.controls['username'];
            username.valueChanges.subscribe(value => {
                this.showUsernameHint = (username.dirty && value.indexOf('@') < 0);
            });

        }

    private validateUsername(control: Control): {[key: string]: boolean} {
        if(!/(.+)@(.+){2,}\.(.+){2,}/.test(control.value)) {
            return {
                'emailNotValid': true
            };
        }

        return null;
    }

    authenticate($event) {
        this.showAlert = !this.loginForm.valid && this.loginForm.dirty;
        let credentials: any = this.loginForm.value;

        this.authService.login(credentials).then(success => {
            if(success) {
                this.router.navigateByUrl('/');
            } else {
                this.showAlert = true;
            }
        });

        $event.preventDefault();
    }
}
