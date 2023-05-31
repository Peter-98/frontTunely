import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Importa AngularFirestoreModule
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';

import { AddSongPage } from './add-song.page';
import { TracksService } from '../services/tracks.service';
import { GeolocationService } from '../services/geolocation.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

describe('AddSongPage', () => {
  let component: AddSongPage;
  let fixture: ComponentFixture<AddSongPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSongPage],
      imports: [
        IonicModule.forRoot(),
        AngularFirestoreModule, // Agrega AngularFirestoreModule a los imports
        AngularFireModule.initializeApp(environment.firebase),
        HttpClientModule,
      ],
      providers: [
        // Agrega el proveedor del InjectionToken
        {
          provide: 'angularfire2.app.options',
          useValue: {},
        },
        {
          provide: 'angularfire2.auth',
          useValue: {},
        },
        AuthService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (param: string) => '1'
              }
            }
          }
        },
      ],
    }).compileComponents();
    
    fixture = TestBed.createComponent(AddSongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with the required form controls', () => {
    expect(component.formValidation).toBeDefined();
  
    if (component.formValidation) {
      expect(component.formValidation.get('name')).toBeTruthy();
      expect(component.formValidation.get('artist')).toBeTruthy();
      expect(component.formValidation.get('album')).toBeTruthy();
      expect(component.formValidation.get('releaseDate')).toBeTruthy();
      expect(component.formValidation.get('genres')).toBeTruthy();
      expect(component.formValidation.get('duration')).toBeTruthy();
      expect(component.formValidation.get('uri')).toBeTruthy();
      expect(component.formValidation.get('image')).toBeTruthy();
    }
  });
  
  it('should disable the "Save Song" button if the form is invalid', () => {
    expect(component.formValidation).toBeDefined();
  
    if (component.formValidation) {
      // Set the form controls to invalid state
      if (component.formValidation && component.formValidation.get('name')) {
        component.formValidation.get('name')!.setValue('');
      }
      if (component.formValidation && component.formValidation.get('artist')) {
        component.formValidation.get('artist')!.setValue('');
      }

      if (component.formValidation && component.formValidation.get('album')) {
        component.formValidation.get('album')!.setValue('');
      }

      if (component.formValidation && component.formValidation.get('releaseDate')) {
        component.formValidation.get('releaseDate')!.setValue('');
      }
      
      if (component.formValidation && component.formValidation.get('genres')) {
        component.formValidation.get('genres')!.setValue('');
      }
      
      if (component.formValidation && component.formValidation.get('duration')) {
        component.formValidation.get('duration')!.setValue('');
      }
      if (component.formValidation && component.formValidation.get('uri')) {
        component.formValidation.get('uri')!.setValue('');
      }
      if (component.formValidation && component.formValidation.get('image')) {
        component.formValidation.get('image')!.setValue('');
      }
  
      fixture.detectChanges(); // Update the view
  
      const saveButton = fixture.nativeElement.querySelector('ion-button[type="submit"]');
      expect(saveButton.disabled).toBeTrue();
    }
  });
  
  
});
