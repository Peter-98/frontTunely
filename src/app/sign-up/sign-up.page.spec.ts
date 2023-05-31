import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Importa AngularFirestoreModule
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';

import { SignUpPage } from './sign-up.page';

describe('SignUpPage', () => {
  let component: SignUpPage;
  let fixture: ComponentFixture<SignUpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpPage ],
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
      ],
    }).compileComponents();
    
    fixture = TestBed.createComponent(SignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form', () => {
    const form = component.formValidation;
    expect(form).toBeTruthy();
  });

  it('should have email and password controls', () => {
    const emailControl = component.formValidation?.get('email');
    const passwordControl = component.formValidation?.get('password');
    expect(emailControl).toBeTruthy();
    expect(passwordControl).toBeTruthy();
  });

  it('should mark form as invalid when email is invalid', () => {
    const form = component.formValidation;
    const emailControl = form?.get('email');

    emailControl?.setValue('invalid-email');
    expect(form?.valid).toBeFalsy();
    expect(emailControl?.valid).toBeFalsy();
  });

  it('should mark form as invalid when password is too short', () => {
    const form = component.formValidation;
    const passwordControl = form?.get('password');

    passwordControl?.setValue('short');
    expect(form?.valid).toBeFalsy();
    expect(passwordControl?.valid).toBeFalsy();
  });

  it('should mark form as valid when email and password are valid', () => {
    const form = component.formValidation;
    const emailControl = form?.get('email');
    const passwordControl = form?.get('password');

    emailControl?.setValue('valid-email@example.com');
    passwordControl?.setValue('valid-password');
    expect(form?.valid).toBeTruthy();
    expect(emailControl?.valid).toBeTruthy();
    expect(passwordControl?.valid).toBeTruthy();
  });

  it('should call tryRegister method on form submission', () => {
    const authService = TestBed.inject(AuthService); // Obtener la instancia del AuthService
    const tryRegisterSpy = spyOn(authService, 'doRegister').and.returnValue(of({})); // Espiar el método doRegister y devolver un observable vacío

    // Obtener el formulario y establecer valores
    const form = component.formValidation;
    form?.get('email')?.setValue('test@example.com');
    form?.get('password')?.setValue('password');

    // Simular el envío del formulario
    const formElement: HTMLFormElement = fixture.nativeElement.querySelector('.form');
    formElement.dispatchEvent(new Event('ngSubmit'));

    // Verificar que el método tryRegister haya sido llamado
    expect(tryRegisterSpy).toHaveBeenCalled();
  });
});
