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

  tryRegister(value: { email: string; password: string }) {
    this.authService.doRegister(value)
      .subscribe(
        async (res: any) => {
          await this.presentToast();
          this.router.navigate(["/trackslist"]);
        },
        (err: any) => {
          this.errorMessage = err.message;
          console.log(err);
        }
      );
  }
  

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Successful registration',
      duration: 2000
    });
    toast.present();
  }
}   
