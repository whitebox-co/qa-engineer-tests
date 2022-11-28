import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:3000',
		experimentalSessionAndOrigin: true,
		supportFile: './support/e2e.{js,jsx,ts,tsx}',
		specPattern: './e2e/**/*.cy.{js,jsx,ts,tsx}'
	},
	viewportHeight: 800,
	viewportWidth: 1280,
	numTestsKeptInMemory: 0,
	defaultCommandTimeout: 60000,
	downloadsFolder: './.dist/downloads',
	fileServerFolder: './',
	fixturesFolder: './.dist/fixtures',
	screenshotsFolder: './.dist/screenshots',
	videosFolder: './.dist/videos',
});
