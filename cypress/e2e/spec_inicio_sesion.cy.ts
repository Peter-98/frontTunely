describe('Inicio de sesión', () => {
  beforeEach(() => {
    // Visitar la página principal
    cy.visit('http://pedromrtaguilera.tech');
  });

  it('inicio de sesión exitoso', () => {
    // Hacer clic en el botón "Log in"
    cy.contains('Log in').click();

        // Rellenar el formulario de inicio de sesión
        cy.get('ion-input[formControlName="email"]').type('pedro@hola.es');
        cy.get('ion-input[formControlName="password"]').type('sdasdadasd');
        
        // Enviar el formulario
        cy.get('ion-button[type="submit"]').click();
        
        // Verificar que se haya iniciado sesión exitosamente
        cy.contains('ion-title', 'All songs');
  });

  it('inicio de sesion incorrecto', () => {
    // Hacer clic en el botón "Log in"
    cy.contains('Log in').click();
  
    // Rellenar el formulario de inicio de sesión con credenciales incorrectas
    cy.get('ion-input[formControlName="email"]').type('usuario_incorrecto@example.com');
    cy.get('ion-input[formControlName="password"]').type('contraseña_incorrecta');
  
    // Enviar el formulario
    cy.get('ion-button[type="submit"]').click();
  
    // Verificar que se muestre un mensaje de error de inicio de sesión
    cy.contains('.error-message', 'Error en la autenticación de MongoDB');
  });

  it('intentar iniciar sesión con un email incorrecto', () => {
    // Hacer clic en el botón "Log in"
    cy.contains('Log in').click();
  
    // Rellenar el formulario de inicio de sesión con un email incorrecto
    cy.get('ion-input[formControlName="email"]').type('email_incorrecto');
    cy.get('ion-input[formControlName="password"]').type('contraseña_valida');
  
    // Verificar que se muestre un mensaje de error de email incorrecto
    cy.contains('.error-message', 'The email format is not correct.');
  });
  
  it('intentar iniciar sesión con una contraseña demasiado corta', () => {
    // Hacer clic en el botón "Log in"
    cy.contains('Log in').click();
  
    // Rellenar el formulario de inicio de sesión con una contraseña demasiado corta
    cy.get('ion-input[formControlName="email"]').type('usuario_valido@example.com');
    cy.get('ion-input[formControlName="password"]').type('123');

  
    // Verificar que se muestre un mensaje de error de contraseña demasiado corta
    cy.contains('.error-message', 'The minimum length of a password is 6 characters.');
  });
  
  
});
