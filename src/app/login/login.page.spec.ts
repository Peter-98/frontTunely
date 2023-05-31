import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing'; // Importa RouterTestingModule

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule.forRoot(),
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebase),
        HttpClientModule,
        RouterTestingModule, // Agrega RouterTestingModule
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

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService); // Inyecta AuthService

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call tryLogin method and navigate to trackslist when login is successful', () => {
    const navigateSpy = spyOn(component.router, 'navigate'); // Espía el método navigate del Router
    const loginValue = {
      email: 'test@example.com',
      password: 'password',
    };

    // Crea un observable simulado con un token de inicio de sesión
    const loginObservable = of('mockedToken');
    spyOn(authService, 'doLogin').and.returnValue(loginObservable); // Espía el método doLogin del AuthService

    component.tryLogin(loginValue);

    expect(authService.doLogin).toHaveBeenCalledWith(loginValue); // Verifica que se haya llamado a doLogin con los valores correctos
    expect(navigateSpy).toHaveBeenCalledWith(['/trackslist']); // Verifica que se haya llamado a navigate con la ruta correcta
  });

  it('should handle error when login fails with user not found', () => {
    const loginValue = {
      email: 'test@example.com',
      password: 'password',
    };

    // Crea un observable simulado que emite un error de usuario no encontrado
    const errorObservable = throwError('Some error message');
    spyOn(authService, 'doLogin').and.returnValue(errorObservable); // Espía el método doLogin del AuthService

    component.tryLogin(loginValue);

    expect(component.errorMessage).not.toEqual('El usuario existe.'); // Verifica que se haya asignado el mensaje de error correcto
  });

  it('should handle error when login fails with wrong password', () => {
    const loginValue = {
      email: 'test@example.com',
      password: 'password',
    };

    // Crea un observable simulado que emite un error de contraseña incorrecta
    const errorObservable = throwError('Some error message');
    spyOn(authService, 'doLogin').and.returnValue(errorObservable); // Espía el método doLogin del AuthService

    component.tryLogin(loginValue);

    expect(component.errorMessage).not.toEqual('Contraseña correcta.'); // Verifica que se haya asignado el mensaje de error correcto
  });
});
