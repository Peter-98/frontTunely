import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ToastController } from '@ionic/angular';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePage } from './home.page';
import { Router } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let authService: AuthService;
  let router: Router;
  let toastController: ToastController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(),
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebase),
        HttpClientModule,
        RouterTestingModule,
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
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    toastController = TestBed.inject(ToastController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to "/trackslist" with the provided data when goToTrackListData is called', () => {
    const data = 'some-data';
    const navigateSpy = spyOn(router, 'navigate');

    component.data = data;
    component.goToTrackListData();

    expect(navigateSpy).toHaveBeenCalledWith(['/trackslist', data]);
  });

  it('should navigate to "/trackslist" when goToTrackList is called', () => {
    const navigateSpy = spyOn(router, 'navigate');

    component.goToTrackList();

    expect(navigateSpy).toHaveBeenCalledWith(['/trackslist']);
  });
});
