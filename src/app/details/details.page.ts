import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TracksService } from '../services/tracks.service';
import { CommentsService } from '../services/comments.service';
import { AlertController, IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AuthService } from '../services/auth.service'; //
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  information: any = null;

  auth = false;
  userId = ''
  message: string | undefined;
  author: string | undefined;
  comment: string | undefined;
  rating: number = 0;

  latitude: number | undefined = undefined;  
  longitude: number | undefined = undefined;
  accuracy: number | undefined = undefined;

  ratingChang: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild(IonModal) modal!: IonModal;

  constructor(private modalController: ModalController, private geolocationService: GeolocationService, private alertController: AlertController, private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute, private tracksService: TracksService,  private commentService: CommentsService) {
   }
 
  ngOnInit() {
    let id = (this.activatedRoute.snapshot.paramMap.get('id')|| '').toString();
 
    this.tracksService.getDetails(id).subscribe(result => {
        this.information = result;

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

   takePosition() {
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

  ratingChanged(rating: number) {
    this.rating = rating;
    this.ratingChang.emit(rating);
  }
  
  convertDuration(duration: number): string {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return minutes + ":" + (parseInt(seconds) < 10 ? '0' : '') + seconds;
  }
  
  

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  async confirm() {
  if (this.author && this.comment) {
    this.sendComment();
    this.modalController.dismiss().then(() => {
      window.location.reload();
    });
    //this.modal.dismiss(this.author, 'confirm');
  } else {
    // Si faltan campos, muestra una alerta
    const alert = this.alertController.create({
      header: 'Missing fields',
      message: 'Please fill in all fields before submitting your comment.',
      buttons: ['OK']
    });
    (await alert).present();
  }
  }

  onWillDismiss(event: Event) {

    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Added comment, ${ev.detail.data}!`;
      location.reload();
    }
  }

  openSpotify() {
    window.open(this.information.uri);
  }

  sendComment() {
    console.log('posi: ',  this.longitude?.toString() || '', this.latitude?.toString() || '', this.accuracy?.toString() || '');
    this.commentService.sendComment(this.author || '', this.comment || '', this.rating, this.information._id, this.userId, this.longitude?.toString() || '', this.latitude?.toString() || '', this.accuracy?.toString() || '');

  }

  goToEdit(itemId: string) {
    this.router.navigate(['/edit', itemId]);
  }

  async presentAlertConfirm(id: string, commentId: string) {
    console.log('uid track:', id, 'uid comment', commentId);
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you want to delete the comment?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {}
        }, {
          text: 'Delete',
          cssClass: 'danger',
          handler: () => {
           this.deleteComment(id, commentId);
          }
        }
      ]
    });
  
    await alert.present();
  }

  deleteComment(id: string, commentId: string): void {
    this.commentService.deleteCommentById(id, commentId).subscribe((response) => {
      if (response === 'OK') {
        console.log('Comment deleted Successfully');
      } else {     
        console.log('Error deleting comment');
      }
      location.reload();
    });
  }
}