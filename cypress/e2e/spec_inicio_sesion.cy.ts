describe('Inicio de sesión', () => {
  beforeEach(() => {
    // Visitar la página principal
    cy.visit('http://pedromrtaguilera.tech');
  });

  it('debería permitir el inicio de sesión exitoso', () => {
    // Hacer clic en el botón "Log in"
    cy.contains('Log in').click();

        // Rellenar el formulario de inicio de sesión
        cy.get('ion-input[formControlName="email"]').type('tu_email@example.com');
        cy.get('ion-input[formControlName="password"]').type('tu_contraseña');
        
        // Enviar el formulario
        cy.get('ion-button[type="submit"]').click();
        
        // Verificar que se haya iniciado sesión exitosamente
        cy.contains('h1', 'Life is music');
        cy.contains('button', 'All songs');
      });
});
