import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  data = ""; 
  auth = false;
  results: Observable<any> | undefined;  
  constructor(private toastController: ToastController, private authService: AuthService, private router : Router) { }
  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe(user => {
      if (user) {
        // El usuario está autenticado
        console.log('AUTENTIFICADO');
        this.auth = true;
      } else {
        console.log('NO AUTENTIFICADO');
        // El usuario no está autenticado
        this.auth =false;
      }
    });
  }

  goToTrackListData() {
    this.router.navigate(["/trackslist", this.data]); 
  }

  goToTrackList() {
    this.router.navigate(["/trackslist"]); 
  }

  logout(){ 
    this.authService.doLogout()
    .then(res => {
      console.log("User logout");
      this.presentToast('You have successfully logged out');
      this.router.navigate(["/home"]);
    }, err => {
      console.log(err);
    });
  }
  
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  

}
