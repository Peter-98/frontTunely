describe('Inicio de sesión', () => {
  beforeEach(() => {
    // Visitar la página principal
    cy.visit('http://pedromrtaguilera.tech');

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

  it('inicio de sesión exitoso', () => {
    cy.get('.search-container > .button-has-icon-only').click();


    cy.get('.ion-color-success').click();

  });
  
});
