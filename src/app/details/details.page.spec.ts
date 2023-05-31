import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Importa AngularFirestoreModule
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';

import { DetailsPage } from './details.page';
import { ActivatedRoute } from '@angular/router';


describe('DetailsPage', () => {
  let component: DetailsPage;
  let fixture: ComponentFixture<DetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPage ],
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

    fixture = TestBed.createComponent(DetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call takePosition method', () => {
    spyOn(component, 'takePosition');
    component.takePosition();
    expect(component.takePosition).toHaveBeenCalled();
  });

  it('should emit ratingChang event when ratingChanged is called', () => {
    const rating = 5;
    spyOn(component.ratingChang, 'emit');
    component.ratingChanged(rating);
    expect(component.ratingChang.emit).toHaveBeenCalledWith(rating);
  });

  
});
