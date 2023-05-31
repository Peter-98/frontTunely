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
     { type: 'required', message: 'El email es un campo obligatorio.' },
     { type: 'pattern', message: 'El formato del email no es correcto.' }
   ],
   'password': [
     { type: 'required', message: 'La contraseña es un campo obligatorio.' },
     { type: 'minlength', message: 'La lóngitud mínima de una contraseña es 6 caracteres.' }
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
          this.errorMessage = 'El usuario no existe.';
        } else if (err.code === 'auth/wrong-password') {
          this.errorMessage = 'Contraseña incorrecta.';
        } else {
          this.errorMessage = err.message;
        }
        console.log(err);
      }
    );
  }
  
}   