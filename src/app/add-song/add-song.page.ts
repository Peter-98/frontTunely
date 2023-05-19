import { Component, OnInit, SecurityContext } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TracksService } from '../services/tracks.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { GeolocationService } from '../services/geolocation.service';
import { of } from 'rxjs';
import { Camera, CameraResultType } from '@capacitor/camera'; 
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.page.html',
  styleUrls: ['./add-song.page.scss'],
})
export class AddSongPage implements OnInit {

  formValidation: FormGroup | undefined;
  information: any = null;
  auth = false;
  userId = '';
  latitude: number | undefined = undefined;  
  longitude: number | undefined = undefined;
  accuracy: number | undefined = undefined;

  showReleaseDateError = false;
  showDurationError = false;

  photo: SafeResourceUrl | null = null;
  image: string | null = null;
  constructor(private sanitizer: DomSanitizer, private geolocationService: GeolocationService, private router: Router,  private alertController: AlertController, private formBuilder: FormBuilder, private authService: AuthService, private activatedRoute: ActivatedRoute, private tracksService: TracksService) { }

  ngOnInit() {
    this.resetFields();
    let id = (this.activatedRoute.snapshot.paramMap.get('id')|| '').toString();
    this.tracksService.getDetails(id).subscribe(result => {
      this.information = result;
      this.takePosition();
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
      
  });
  }
  resetFields(){
    this.formValidation = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      artist: new FormControl('', Validators.required),
      album: new FormControl('', Validators.required),
      releaseDate: new FormControl('',[Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
      genres: new FormControl('', Validators.required),
      duration: new FormControl('',[Validators.required, Validators.pattern(/^-?\d*\.?\d+$/)]),
      uri: new FormControl('', Validators.required),
      image: new FormControl('')
    });

    if (this.formValidation) {
      const releaseDateControl = this.formValidation.get('releaseDate');
      if (releaseDateControl) {
        releaseDateControl.valueChanges.subscribe(() => {
          this.showReleaseDateError = releaseDateControl.invalid;
        });
      }
    
      const durationControl = this.formValidation.get('duration');
      if (durationControl) {
        durationControl.valueChanges.subscribe(() => {
          this.showDurationError = durationControl.invalid;
        });
      }
    }
    
  }

  isFormValid(): boolean {
    return this.formValidation !== undefined && this.formValidation.valid && (this.formValidation.value.image || this.photo);
  }
  
  

  async takePicture() { 
    const image = await Camera.getPhoto({ 
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Base64
    });

    if (image && image.base64String) {
        const mimeType = image.format === 'png' ? 'image/png' : 'image/jpeg';
        const url = `data:${mimeType};base64,${image.base64String}`;
        this.photo = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl(url))

    }
}

  onImgError() {
    // No hace nada
  }

  onSubmit(value: { name: any; artist: any; album: any; releaseDate: any; genres: any; duration: any; uri: any; image: any; }){ 
    let data = {
      name: value.name,
      artist: value.artist,
      album: value.album,
      releaseDate: value.releaseDate,
      genres: value.genres,
      duration: value.duration,
      uri: value.uri,
      userId: this.userId,
      image: value.image,
      coords: {
        type: "Point",
        coordinates: [this.longitude, this.latitude, this.accuracy]
      },
      href: this.photo
    };
    console.log('foto al guardar', this.photo );
    const result$ = of([data]); // crear un nuevo Observable que emita el array data
    console.log('datos de salida: ' ,this.information._id, result$);
    this.tracksService.sendResults(result$).subscribe((response) => {
      console.log('response:', response);
      if (response === 'OK') {
        this.presentAlert('Songs Saved Successfully', ('Coordinates: Latitude=' + this.latitude + ', Longitude=' + this.longitude + ', Accuracy=' + this.accuracy ));
        this.router.navigate(['/trackslist']);
      } else if (response === 'Duplicate Song') {
        this.presentAlert('Duplicate song', 'Nothing has been saved');
      } else {     
        this.presentAlert('Error saving songs', 'Try again later');
      }
    });
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
