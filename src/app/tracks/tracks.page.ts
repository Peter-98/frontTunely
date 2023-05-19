import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { TracksService } from '../services/tracks.service';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.page.html',
  styleUrls: ['./tracks.page.scss'],
})
export class TracksPage implements OnInit {

  selected: number[] = []; // Array que almacena los índices de las cards seleccionadas
  results: Observable<any[]> | undefined;
  searchTerm: string ='';
  searchTermSpotify: string ='';
  userId: string ='';

  latitude: number | undefined = undefined;  
  longitude: number | undefined = undefined;
  accuracy: number | undefined = undefined;

  @ViewChild("locationContainer") locationContainer: any;

  constructor(private geolocationService: GeolocationService, private alertController: AlertController, private authService: AuthService, private tracksService: TracksService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.searchTerm = (this.activateRoute.snapshot.paramMap.get("searchTermSpotify")|| '').toString(); 
    this.results = this.tracksService.searchData(this.searchTerm);
    this.getId();
  }

  async getId() {
    if(this.userId == ''){
      const userId = await this.authService.getUserId();
      console.log('user id:', userId);
      if (userId) {
        this.userId = userId;
      }
    }
  }

  async takePosition() {
    console.log('Pido ubicacion'); 
      this.geolocationService
      .getPosition()
      .then((position) => {
        console.log('Positions: ',position);
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.accuracy = position.coords.accuracy;
      })
      .catch((err) => console.error(err));
    
  }

  toggleSelected(index: number) {
    // Si la card ya está seleccionada, la quitamos de la lista de seleccionadas
    if (this.isSelected(index)) {
      this.selected = this.selected.filter(i => i !== index);
    }
    // Si no está seleccionada, la añadimos a la lista
    else {
      this.selected.push(index);
    }
  }

  isSelected(index: number): boolean {
    return this.selected.includes(index);
  }

  checkSelected(): boolean {
    return this.selected.length > 0;
  }

  viewDetails(itemId: string) {
    this.router.navigate(['/details', itemId]);
  }

  sendSelectedResults() {
    if (this.results) {
      this.takePosition();
      const selectedResults = this.results.pipe(
        map((results: any[]) => {
          return this.selected.map((index) => {
            const result = results[index];
          // Añadir el campo userId con su valor a cada objeto en el array
          result.userId = this.userId;
          // Añadir las variables latitude, longitude y accuracy a results.coords
          result.coords = {
            type: "Point",
            coordinates: [this.longitude, this.latitude, this.accuracy]
          };
          return result;
          });
        })
      );
      console.log('Enviar results :', selectedResults);
      this.tracksService.sendResults(selectedResults).subscribe((response) => {
        console.log('response:', response);
        if (response === 'OK') {
          this.presentAlert('Songs Saved Successfully', ('Coordinates: Latitude=' + this.latitude + ', Longitude=' + this.longitude + ', Accuracy=' + this.accuracy ));
        } else if (response === 'Duplicate Song') {
          this.presentAlert('Duplicate song', 'Nothing has been saved');
        } else {     
          this.presentAlert('Error saving songs', 'Try again later');
        }
      });
    }
  }

  async presentAlert(title: string, message: string) {
    console.log(title);
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
    await alert.onDidDismiss().then(() => {
      this.router.navigate(['/trackslist']).then(() => {
        location.reload();
      });
  });
  }
}

