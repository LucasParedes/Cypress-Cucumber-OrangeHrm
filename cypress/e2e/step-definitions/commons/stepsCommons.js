import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('que estoy en la página de inicio de sesión de OrangeHRM', () => {
	cy.visit(Cypress.env('urlBase'));
	cy.url().should('include', 'auth/login');
});