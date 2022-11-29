# Installing Cypress

Install using `pnpm` at the monorepo root.

## Running Tests

### Setup/Pre-requisite

1. Start the API and UIs by running `pnpm run dev` at the monorepo root.

#### Using the UI

1. `pnpm run cy:open`
2. Select E2E Testing
3. Select Chrome
4. Click on the spec you want to run

#### Headless

1. `pnpm run cy:run` - Will run all the tests (not recommended)
2. `pnpm run cy:run --spec <absolute_path_to_desired_test>` (recommended)

- Ex: `npm run cy:run --spec cypress/e2e/dtc.cy.ts`

#### Monorepo Test

While in the monorepo root

1. `pnpm run test:e2e` - Will run the api, ui, and then open the cypress ui menu
2. `pnpm run test:e2e` - Will run the api, ui, and then run all cypress tests in headless mode.

***Notes***

Running the tests headless will record videos and take screenshots which can be found in the folders *videos* and *screenshots*

