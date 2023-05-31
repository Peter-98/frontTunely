import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { TracksService } from '../services/tracks.service';
import { GeolocationService } from '../services/geolocation.service';

import { TracksPage } from './tracks.page';
import { ActivatedRoute, Router } from '@angular/router';

describe('TracksPage', () => {
  let component: TracksPage;
  let fixture: ComponentFixture<TracksPage>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let tracksServiceSpy: jasmine.SpyObj<TracksService>;
  let geolocationServiceSpy: jasmine.SpyObj<GeolocationService>;
  let navControllerSpy: jasmine.SpyObj<NavController>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(waitForAsync(() => {
    const authServiceMock = jasmine.createSpyObj('AuthService', ['getUserId']);
    const tracksServiceMock = jasmine.createSpyObj('TracksService', ['searchData', 'sendResults']);
    const geolocationServiceMock = jasmine.createSpyObj('GeolocationService', ['getPosition']);
    const navControllerMock = jasmine.createSpyObj('NavController', ['navigateForward']);
    const routerMock = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [TracksPage],
      imports: [
        IonicModule.forRoot(),
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebase),
        HttpClientModule,
      ],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: TracksService, useValue: tracksServiceMock },
        { provide: GeolocationService, useValue: geolocationServiceMock },
        { provide: NavController, useValue: navControllerMock },
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: (param: string) => 'searchTermSpotify' } } } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TracksPage);
    component = fixture.componentInstance;

    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    tracksServiceSpy = TestBed.inject(TracksService) as jasmine.SpyObj<TracksService>;
    geolocationServiceSpy = TestBed.inject(GeolocationService) as jasmine.SpyObj<GeolocationService>;
    navControllerSpy = TestBed.inject(NavController) as jasmine.SpyObj<NavController>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    authServiceSpy.getUserId.and.returnValue(Promise.resolve('user123'));
    tracksServiceSpy.searchData.and.returnValue(of([{ /* sample track details */ }]));
    tracksServiceSpy.sendResults.and.returnValue(of('OK'));
    geolocationServiceSpy.getPosition.and.returnValue(Promise.resolve({ coords: { latitude: 123, longitude: 456, accuracy: 100 } }));
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with track details and user ID', async () => {
    await component.ngOnInit();

    expect(authServiceSpy.getUserId).toHaveBeenCalled();
    expect(tracksServiceSpy.searchData).toHaveBeenCalledWith('searchTermSpotify');
    expect(component.userId).toEqual('user123');
    expect(component.results).toBeTruthy();
  });

  it('should toggle selection on click', () => {
    const item = { /* sample track details */ };
    component.selected = [];
    component.isSelected(0);

    component.toggleSelected(0);

    expect(component.selected).toContain(0);
  });

  it('should remove selection on click', () => {
    const item = { /* sample track details */ };
    component.selected = [0];
    component.isSelected(0);

    component.toggleSelected(0);

    expect(component.selected).not.toContain(0);
  });

});
