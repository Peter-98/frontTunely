describe('Registro', () => {
  beforeEach(() => {
    // Visitar la página principal
    cy.visit('http://pedromrtaguilera.tech');
  });

  it('registro exitoso', () => {

    cy.contains('Sign up ').click();

        // Rellenar el formulario de inicio de sesión
        cy.get('ion-input[formControlName="email"]').type('prueba@prueba.es');
        cy.get('ion-input[formControlName="password"]').type('pruebaPrueba');
        
        // Enviar el formulario
        cy.get('ion-button[type="submit"]').click();
        
        // Verificar que se haya registrado exitosamente
        cy.contains('ion-title', 'All songs');
  });

  it('registro incorrecto', () => {

    cy.contains('Sign up ').click();
  
    // Rellenar el formulario de inicio de sesión con credenciales incorrectas
    cy.get('ion-input[formControlName="email"]').type('prueba@prueba.es');
    cy.get('ion-input[formControlName="password"]').type('pruebaPrueba');
  
    // Enviar el formulario
    cy.get('ion-button[type="submit"]').click();
  
    // Verificar que se muestre un mensaje de error de inicio de sesión
    cy.contains('.error-message', 'Error en la solicitud');
  });

  it('intentar registrarse con un email incorrecto', () => {
    cy.contains('Sign up ').click();
  
    // Rellenar el formulario de inicio de sesión con un email incorrecto
    cy.get('ion-input[formControlName="email"]').type('email_incorrecto');
    cy.get('ion-input[formControlName="password"]').type('contraseña_valida');
  
    // Verificar que se muestre un mensaje de error de email incorrecto
    cy.contains('.error-message', 'The email format is not correct.');
  });
  
  it('intentar registrarse con una contraseña demasiado corta', () => {
    cy.contains('Sign up ').click();
  
    // Rellenar el formulario de inicio de sesión con una contraseña demasiado corta
    cy.get('ion-input[formControlName="email"]').type('usuario_valido@example.com');
    cy.get('ion-input[formControlName="password"]').type('123');

  
    // Verificar que se muestre un mensaje de error de contraseña demasiado corta
    cy.contains('.error-message', 'The minimum length of a password is 6 characters.');
  });
  
  
});
