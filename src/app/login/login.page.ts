import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formValidation: FormGroup | undefined; 
  errorMessage: string = ''; 

  formValidationMessages = { 
    'email': [
      { type: 'required', message: 'Email is a required field.' },
      { type: 'pattern', message: 'The email format is not correct.' }
    ],
    'password': [
      { type: 'required', message: 'Password is a required field.' },
      { type: 'minlength', message: 'The minimum length of a password is 6 characters.' }
    ]
  };

  constructor(
    private authService: AuthService, 
    private formBuilder: FormBuilder, 
    public router: Router 
  ) { }

  ngOnInit() {
    this.formValidation = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  tryLogin(value: { email: string; password: string }) {
    this.authService.doLogin(value).subscribe(
      (token: string) => {
        this.router.navigate(['/trackslist']);
      },
      (err: any) => {
        if (err.code === 'auth/user-not-found') {
          this.errorMessage = 'Username does not exist.';
        } else if (err.code === 'auth/wrong-password') {
          this.errorMessage = 'Incorrect password.';
        } else {
          this.errorMessage = err.message;
        }
        console.log(err);
      }
    );
  }
  
}   