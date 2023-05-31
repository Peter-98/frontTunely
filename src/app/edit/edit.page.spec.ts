import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { EditPage } from './edit.page';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

describe('EditPage', () => {
  let component: EditPage;
  let fixture: ComponentFixture<EditPage>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPage],
      imports: [
        IonicModule.forRoot(),
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebase),
        HttpClientModule,
      ],
      providers: [
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
                get: (param: string) => '1',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditPage);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);

    component.formValidation = formBuilder.group({
      name: ['', Validators.required],
      artist: ['', Validators.required],
      album: ['', Validators.required],
      releaseDate: ['', Validators.required],
      genres: ['', Validators.required],
      duration: ['', Validators.required],
      uri: ['', Validators.required],
      image: ['', Validators.required],
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if the form is valid', () => {
    // Set form values
    component.formValidation?.controls['name'].setValue('Song Name');
    component.formValidation?.controls['artist'].setValue('Artist Name');
    component.formValidation?.controls['album'].setValue('Album Name');
    component.formValidation?.controls['releaseDate'].setValue('2023-01-01');
    component.formValidation?.controls['genres'].setValue('Genre 1, Genre 2');
    component.formValidation?.controls['duration'].setValue('3:30');
    component.formValidation?.controls['uri'].setValue('spotify:track:123456789');
    component.formValidation?.controls['image'].setValue('https://example.com/image.jpg');

    expect(component.isFormValid()).toBeTruthy();
  });

  it('should return false if the form is invalid', () => {
    // Do not set any form values

    expect(component.isFormValid()).toBeFalsy();
  });

});
