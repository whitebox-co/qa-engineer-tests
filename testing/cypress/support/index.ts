/* eslint-disable @typescript-eslint/no-namespace */
export {};

require('cypress-plugin-tab');

export interface Order {
	firstName: string;
	lastName: string;
	street1: string;
	city: string;
	state: string;
	zip: string;
}

interface ApiCallParams {
	qs?: any;
	body?: any;
	method?: string;
}

declare global {
	namespace Cypress {
		interface Chainable {
			joshTest(linkName: string): Chainable<void>;
		}
	}
}
