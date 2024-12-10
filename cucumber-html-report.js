import { generate } from 'multiple-cucumber-html-reporter';

generate({
	jsonDir: 'cypress/reports/cucumber-json/cucumber-json.js',
	reportPath: 'cypress/reports/html-multi-reports/',
	displayDuration: true,
	displayReportTime: true,
	metadata: {
		device: 'Maquina Local',
		platform: {
			name: 'Windows',
			version: '11',
		},
	},
});
