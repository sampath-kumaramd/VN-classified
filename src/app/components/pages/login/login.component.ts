import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  signupForm: FormGroup;
  hide = true;
  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });

    this.signupForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      console.log('Login form is not valid');
    }
  }

  onSignupSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      console.log('Signup form is not valid');
    }
  }
}
