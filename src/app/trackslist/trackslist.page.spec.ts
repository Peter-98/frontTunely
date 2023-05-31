import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Importa AngularFirestoreModule
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';

import { TrackslistPage } from './trackslist.page';
import { ActivatedRoute, Router } from '@angular/router';

describe('TrackslistPage', () => {
  let component: TrackslistPage;
  let fixture: ComponentFixture<TrackslistPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackslistPage ],
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
    
    fixture = TestBed.createComponent(TrackslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    // Act
    fixture.detectChanges();
  
    // Assert
    expect(component).toBeTruthy();
  });

  it('should log out the user, display a toast, and navigate to "/home" when logout is called', async () => {
    const authService = TestBed.inject(AuthService);
    const router = TestBed.inject(Router);
    const doLogoutSpy = spyOn(authService, 'doLogout').and.resolveTo();
    const presentToastSpy = spyOn(component, 'presentToast');
    const navigateSpy = spyOn(router, 'navigate');
  
    // Act
    await component.logout();
  
    // Assert
    expect(doLogoutSpy).toHaveBeenCalled();
    expect(presentToastSpy).toHaveBeenCalledWith('You have successfully logged out');
    expect(navigateSpy).toHaveBeenCalledWith(['/home']);
  });
  
  
});
