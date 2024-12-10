/* COMANDO PERSONALIZADOS UTILIZADOS EN CASOS DE PRUEBA */

beforeEach(() => {
	Cypress.on('uncaught:exception', () => false); // returning false here prevents Cypress from failing the test
	// Se elimina cookies y el storage
	cy.clearAllCookies();
	cy.clearAllLocalStorage();

	// Parametros para un log mas limpio.
	cy.intercept({ resourceType: 'xhr' }, { log: false });
	cy.intercept({ resourceType: 'fetch' }, { log: false });
});
