import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Importa AngularFirestoreModule
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        AngularFirestoreModule, // Agrega AngularFirestoreModule a los imports
        AngularFireModule.initializeApp(environment.firebase),],
      providers: [AuthService,
        {
          provide: 'angularfire2.app.options',
          useValue: {},
        },
        {
          provide: 'angularfire2.auth',
          useValue: {},
        },]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send login request', () => {
    const email = 'test@example.com';
    const password = 'password';

    service.postLogin(email, password).subscribe(response => {
      expect(response).toEqual('token'); 
    });

    const req = httpMock.expectOne('http://webapps.pedromrtaguilera.tech:3000/auth/login');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ email, pass: password });

    req.flush({ token: 'token' });
  });

  it('should send signup request', () => {
    const email = 'test@example.com';
    const password = 'password';

    service.postSignUp(email, password).subscribe(response => {
      expect(response).toEqual('token'); 
    });

    const req = httpMock.expectOne('http://webapps.pedromrtaguilera.tech:3000/auth/signup');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ email, pass: password });

    req.flush({ token: 'token' }); 
  });

});
