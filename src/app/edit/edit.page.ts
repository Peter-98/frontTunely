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
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  
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
    let id = (this.activatedRoute.snapshot.paramMap.get('id')|| '').toString();
    this.tracksService.getDetails(id).subscribe(result => {
      this.information = result;
      this.resetFields(result);
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
  resetFields(result: any){
    const fecha = new Date(result.releaseDate);
    const fechaFormateada = fecha.toISOString().slice(0, 10);
    this.formValidation = this.formBuilder.group({
      name: new FormControl(result.name, Validators.required),
      artist: new FormControl(result.artist, Validators.required),
      album: new FormControl(result.album, Validators.required),
      releaseDate: new FormControl(fechaFormateada,[Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
      duration: new FormControl(result.duration,[Validators.required, Validators.pattern(/^-?\d*\.?\d+$/)]),
      uri: new FormControl(result.uri, Validators.required),
      image: new FormControl(result.image)
    });

    this.photo = result.href;

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

  onSubmit(value: { name: any; artist: any; album: any; releaseDate: any; duration: any; uri: any; image: any; }){ 
    let data = {
      name: value.name,
      artist: value.artist,
      album: value.album,
      releaseDate: value.releaseDate,
      genres: '',
      duration: value.duration,
      uri: value.uri,
      userId: this.userId,
      image: value.image,
      coords: {
        type: "Point",
        coordinates: {
          longitude: this.longitude,
          latitude: this.latitude,
          accuracy: this.accuracy
        }
      },
      href: this.photo
    };
    console.log('foto al guardar', this.photo );
    const result$ = of([data]); // crear un nuevo Observable que emita el array data
    console.log('datos de salida: ' ,this.information._id, result$);
    this.tracksService.updateTrack(this.information._id, result$).subscribe((response) => {
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
