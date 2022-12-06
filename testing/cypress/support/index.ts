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

interface User {
	userName: string,
    email: string,
    name: {
        firstName: Order["firstName"],
        lastName: Order["lastName"]
    },
    address: {
        street1: Order["street1"],
        city: Order["city"],
        state: Order["state"],
        postalCode: Order["zip"]
    },
    aboutMe: string
}

declare global {
	namespace Cypress {
		interface Chainable {
			hasTitle(): Chainable<void>;
			hasCorrectUrl(url: string, dataSelector: string): Chainable<Element>
		}
	}
	var user: User;
}
