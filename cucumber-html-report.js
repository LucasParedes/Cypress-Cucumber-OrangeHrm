import { generate } from 'multiple-cucumber-html-reporter';

generate({
	jsonDir: './reports/cucumber-reports/',
	reportPath: './reports/cucumber-html-multi-reports/',
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
