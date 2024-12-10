import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { loginPage } from '../../support/pages/loginPage';
import './commons/stepsCommons';

// Validación de inicio de sesión

When('ingreso el usuario {string} y la contraseña {string} y hago clic en el botón Login', (username,password) => {
	loginPage.login(username,password);
});

Then('debería ver {string}', (mensaje) => {
	if (mensaje.includes('dashboard')) {
		// Validación para redirección al dashboard
		cy.url().should('include', '/dashboard');
		cy.get('.oxd-layout.orangehrm-upgrade-layout').should('be.visible');
	} else {
		// Simplemente no se redirige y valida el recuadro de invalid credentials
		cy.url().should('not.include', '/dashboard');
		loginPage.invalidCredential().then(text => {
			expect(text).to.equal(mensaje);
		});
	}
});

// Validación de los campos obligatorios

When('dejo los dos campos vacíos y intento iniciar sesión', () => {
	loginPage.login();
});

Then('debería ver el mensaje de error {string}', (mensaje) => {
	loginPage.requiredInputs().should('have.length', 2); // Verifica que haya exactamente dos elementos
	loginPage.requiredInputs().each((element) => {
		cy.wrap(element).should('contain', mensaje); // Verifica que ambos contengan el mensaje esperado
	});
});