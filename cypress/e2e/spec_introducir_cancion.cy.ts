describe('Inicio de sesión', () => {
  it('inserta cancion existosamente', () => {
    // Visitar la página principal
    cy.visit('http://pedromrtaguilera.tech');

    // Hacer clic en el botón "Log in"
    cy.contains('Log in').click();

    // Rellenar el formulario de inicio de sesión
    cy.get('ion-input[formControlName="email"]').type('pedro@hola.es');
    cy.get('ion-input[formControlName="password"]').type('sdasdadasd');

    // Intercepta la solicitud de inicio de sesión
    cy.intercept('POST', 'http://webapps.pedromrtaguilera.tech:3000/auth/login').as('loginRequest');

    // Enviar el formulario
    cy.get('ion-button[type="submit"]').click();

    // Esperar a que la solicitud de inicio de sesión se complete
    cy.wait('@loginRequest').then((interception) => {
      // Verificar que la solicitud haya sido exitosa (código de respuesta 200)
      expect(interception.response?.statusCode).to.equal(200);

      // Extraer el token de la respuesta y guardarlo en el almacenamiento local personalizado
      const { token } = interception.response?.body;
      cy.window().then((win) => {
        win.localStorage.setItem('token', token);
        console.log('Token:', token); // Mostrar el token por consola
      });
    });

    // Continuar con el resto de la prueba después de obtener el token
    cy.get('.search-container > .button-has-icon-only').click();
    cy.get('.ion-color-success').click();

    // Rellenar el formulario de carga de canciones
    cy.get('ion-input[formControlName="name"]').type('Canción de prueba');
    cy.get('ion-input[formControlName="artist"]').type('Artista de prueba');
    cy.get('ion-input[formControlName="album"]').type('Álbum de prueba');
    cy.get('ion-input[formControlName="releaseDate"]').type('2022-01-01');
    cy.get('ion-input[formControlName="duration"]').type('240');
    cy.get('ion-input[formControlName="uri"]').type('spotify:track:0123456789');
    cy.get('ion-input[formControlName="image"]').type('https://www.soy502.com/sites/default/files/styles/mobile_full_node/public/2017/Nov/20/por_que_repites_la_misma_cancion.jpg');

    // Hacer clic en el botón "Save Song"
    cy.get('.div-button-create > .md').click();


  });
});


