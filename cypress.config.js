import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
	e2e: {
		specPattern: 'cypress/e2e/features/**/*.feature', // Ruta para los archivos .feature
		stepDefinitions: 'cypress/e2e/step-definitions/**/*.js', // Ruta para las step definitions
		async setupNodeEvents(on, config) {
			// Esto es necesario para que el preprocesador pueda generar reportes JSON después de cada ejecución, entre otras cosas
			await addCucumberPreprocessorPlugin(on, config);

			on(
				'file:preprocessor',
				createBundler({
					plugins: [createEsbuildPlugin(config)],
				})
			);

			// Devuelve el objeto de configuración
			return config;
		},
		viewportWidth: 1360,
		viewportWidthMobile: 375,
		pageLoadTimeout: 90000, // tiempo de carga de la pagina
		defaultCommandTimeout: 35000, // tiempo para cada comando en Cypress
		requestTimeout: 90000, // tiempo para que una solicitud HTTP se complete.
		chromeWebSecurity: false, //permite realizar peticiones entre dominios diferentes durante las pruebas
		retries: {
			runMode: 0, // se ejecuta el caso dos 2 veces si falla mas en run
			openMode: 0, // se ejecuta el caso 1 vez sola si falla en open
		},
	},
	env: {
		urlBase : 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
	},
});
