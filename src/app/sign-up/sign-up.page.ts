import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

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
    private router: Router,
    private toastController: ToastController
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

  tryRegister(value: { email: string; password: string; }){ 
    this.authService.doRegister(value)
    .then(async res => {
      await this.presentToast();
      this.router.navigate(["/products"]);
    }, err => {
      this.errorMessage = err.message;
      console.log(err);
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Registro exitoso',
      duration: 2000
    });
    toast.present();
  }
}   
