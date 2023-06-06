describe('Buscar cancion', () => {
  beforeEach(() => {
    // Visitar la página principal
    cy.visit('http://pedromrtaguilera.tech');

  });

  it('búsqueda de canción por nombre exitosa', () => {
    // Rellenar el campo de búsqueda
    cy.get('input[name="search"]').type('Wake Me Up');

    // Hacer clic en el botón de búsqueda
    cy.get('.search-btn').click();

    // Verificar que se haya redirigido a la lista de canciones
    cy.contains('ion-title', 'All songs');

    // Verificar que se muestren los resultados de la búsqueda
    cy.contains('ion-card-title', 'Wake Me Up');
    //cy.get('.buttons-first-slot > .md').click();
  });


  it('búsqueda de canción por artista exitosa', () => {
    // Rellenar el campo de búsqueda
    cy.get('input[name="search"]').type('Avicii');

    // Hacer clic en el botón de búsqueda
    cy.get('.search-btn').click();

    // Verificar que se haya redirigido a la lista de canciones
    cy.contains('ion-title', 'All songs');

    // Verificar que se muestren los resultados de la búsqueda
    cy.contains('ion-card-subtitle', 'Avicii');
  });


  it('búsqueda de canción por fecha exitosa', () => {
    // Rellenar el campo de búsqueda
 
    cy.get('input[name="search"]').type('2013-01-01');

    // Hacer clic en el botón de búsqueda
    cy.get('.search-btn').click();

    // Verificar que se haya redirigido a la lista de canciones
    cy.contains('ion-title', 'All songs');

    // Verificar que se muestren los resultados de la búsqueda
    cy.contains('ion-card-title', 'Wake Me Up');
  });



  it('búsqueda de canción desde lista canciones por nombre exitosa', () => {

    cy.get('.btn').click();
    // Rellenar el campo de búsqueda
    cy.get('ion-searchbar[placeholder="Search song"]').type('Wake Me Up');

    // Verificar que se muestren los resultados de la búsqueda
    cy.get('ion-card-title').should('contain', 'Wake Me Up');
  });

  it('búsqueda de canción desde lista canciones por artista exitosa', () => {

    cy.get('.btn').click();
    // Rellenar el campo de búsqueda
    cy.get('ion-searchbar[placeholder="Search song"]').type('Avicii');

    // Verificar que se muestren los resultados de la búsqueda
    cy.get('ion-card-title').should('contain', 'Wake Me Up');
  });


  it('búsqueda de canción desde lista canciones por fecha exitosa', () => {

    cy.get('.btn').click();
    // Rellenar el campo de búsqueda
    cy.get('ion-searchbar[placeholder="Search song"]').type('2013-01-01');

    // Verificar que se muestren los resultados de la búsqueda
    cy.get('ion-card-title').should('contain', 'Wake Me Up');
  });

  
  
});
