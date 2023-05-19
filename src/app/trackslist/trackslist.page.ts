import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TracksService } from '../services/tracks.service';
import { AuthService } from '../services/auth.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-trackslist',
  templateUrl: './trackslist.page.html',
  styleUrls: ['./trackslist.page.scss'],
})
export class TrackslistPage implements OnInit {

  auth = false;
  userId: string = '';
  searchTerm: string ='';
  searchTermSpotify: string ='';
  results: Observable<any[]> | undefined;

  constructor(private toastController: ToastController, private alertController: AlertController, private authService: AuthService, private tracksService: TracksService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.searchTerm = (this.activateRoute.snapshot.paramMap.get("searchTerm")|| '').toString(); 
    if (this.searchTerm) {
      this.results = this.tracksService.getDataBySearchTerm(this.searchTerm);
    } else {
      this.results = this.tracksService.getData();
    }

    this.authService.isAuthenticated().subscribe(user => {
      if (user) {
        this.userId = user.uid;
        // El usuario está autenticado
        this.auth = true;
      } else {
        // El usuario no está autenticado
        this.auth =false;
      }
    });
  }

  viewDetails(itemId: string) {
    this.router.navigate(['/details', itemId]);
  }

  searchTracks(): void {
    this.results = this.tracksService.getDataBySearchTerm(this.searchTerm);
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

  deleteTrack(itemId: string): void {
    this.tracksService.deleteById(itemId).subscribe((response) => {
      location.reload();
    });
  }

  openSearch() {
    const overlay = document.getElementById("search-overlay");
    if(overlay)
    overlay.classList.add("show");
  }

  closeSearch() {
    const overlay = document.getElementById("search-overlay");
    if(overlay)
    overlay.classList.remove("show");
  }

  goToTrackListData() {
    this.router.navigate(["/tracks", this.searchTermSpotify]); 
  }

  goToAddTrackListData() {
    this.router.navigate(["/add-song"]); 
  }

  async presentAlertConfirm(itemId: string) {
    const alert = await this.alertController.create({
      header: 'Are u sure?',
      message: 'Do you want to delete the song?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
          }
        }, {
          text: 'Delete',
          cssClass: 'danger',
          handler: () => {
            console.log('Confirmar');
            this.deleteTrack(itemId);
          }
        }
      ]
    });
  
    await alert.present();
  }

}
  
