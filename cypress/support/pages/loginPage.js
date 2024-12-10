class LoginPage {

	constructor() {
		this.userInput = () => cy.get('input[name="username"]');
		this.passwordInput = () => cy.get('input[name="password"]');
		this.loginButton = () => cy.get('button[type="submit"]');

		this.invalidCredentialsAlert = () => cy.get('div[role=alert]');
		this.requiredInputs = () => cy.get('span[class*="input-field-error-message"]');
	}

	typeCredentials(username = '', password = '') {
		if (username) {
			this.userInput().clear().type(username);
		}
		if (password) {
			this.passwordInput().clear().type(password);
		}
	}

	login(username = '', password = '') {
		cy.visit(Cypress.env('urlBase')); // Navega a la URL base configurada en Cypress
		this.typeCredentials(username, password);
		this.loginButton().click();
	}

	invalidCredential() {
		return this.invalidCredentialsAlert().invoke('text');
	}

	requiredInputs() {
		return this.requiredInputs().invoke('text');
	}

}

export const loginPage = new LoginPage;