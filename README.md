# Whitebox QA Engineer Testing Monorepo

This Monorepo contains all setup necessary for QA Engineers Candidates to use their knowledge to create automated tests using the Whitebox Tech Stack.

## Testing Expectations

1. A Fork of this repository should be created against this repo's `main` branch.
2. All tests should run using the existing package tooling for each test type. (Do not create new package scripts to run them)
3. Spend no more than a few hours total on this exercise.
4. When you are finished with the tests, Commit and Push your changes to your forked repo, and then create a PR against the `@whitebox-co/qa-engineer-tests` `main` branch.
5. If you would prefer to skip the PR step, simply send us a link to your repository.

**NOTE:** We will run your tests after you send us your PR or a link to your repository, so make sure they are in working order.

### Cypress

1. Create Cypress tests that test as much of the site as possible (Dashboard, Settings, Tables) Admin pages.
2. All Cypress tests should be organized and created using BDD (Behavior Driven Development) methodology.
3. All tests should be in files that represent their UI route.
4. All Cypress tests should go under the testing/cypress/e2e folder.
5. All Cypress tests should use either Arrange-Act-Assert Pattern or the BDD version Given-When-Then but should not use both.
6. Where Cypress Tests are not possible, create manual tests and add them to a .md document stating why it is not possible or why it is not a good idea to test in an automated fashion. 

Extra Points for:

- Showing knowledge of different CSS selectors in your tests.
- Reuse of functions for similar areas of code.
- Creation of Cypress Commands to reuse code.
- Interception of Network Calls.
- Aliasing of Intercepts.
- Using Fixtures to represent data.

### K6

1. All Tests should be done against the [Public API](https://localhost:3002)
2. Create any K6 tests necessary to demonstrate your knowledge of the [different testing types](https://k6.io/docs/test-types/)
3. All tests should be properly organized representing the api's tested and the type of test and put in the `testing/k6` folder
4. Tests should be documented as to their purpose. Please use jsdoc comments where possible.
5. Tests can be javascript or typescript although the `testing/k6` folder is setup to use typescript.

Extra Points For:

- Breaking the API - Test those LIMITS!
- Bonus points for using typescript in your tests
- Bonus points for getting the project setup like [k6-typescript-framework](https://github.com/go-automate/k6-typescript-framework) which the project folder is based off of but using the whitebox api and data structures.

### Postman / Insomnia

1. All Tests should be done against the [Public API](https://localhost:3002)
2. Create a simple Postman and/or Insomnia Collection against the Public API and output a JSON file from the tools that can be imported to the `testing/postman` folder.

Extra Points For:

- Breaking the API - Test Paths, Body Properties, Query Params, Custom Headers, Etc (Try and break stuff)
- Writing a script to convert between the two.
- You can tell us what is not properly implemented (We have intentionally left stuff out) - And Things do not intentionally work as expected!

## What's inside?

This repo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app - The base of the app is a modified template from [Creative Tim](https://www.creative-tim.com/) called [Notus-NextJs](https://github.com/creativetimofficial/notus-nextjs)
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `public-api`: a simple REST API using [NestJS](https://nestjs.com/)
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `cypress`: e2e testing framework used at Whitebox.

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Installation

Make sure [NodeJs](https://nodejs.dev/en/) is installed at the latest version. It is recommended to install [nvm](https://github.com/nvm-sh/nvm) to manage node installation versions.

After installation of Node switch to the latest stable version.

```
nvm install stable
nvm use stable
```

Then you will need to install [pnpm](https://pnpm.io).

Finally, you can install all projects in the repo.

```
pnpm install
```

### Build

To build all apps and packages, run the following command:

```
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm run dev
```

Doing so will launch the following:

- [Web App](http://localhost:3000) - Main Web App for the QA Engineer Test
- [Documentation Web App](http://localhost:3001) - Documentation Web App **(Not Yet Used)**
- [Public API](http://localhost:3002) - Main REST API for the QA Engineer Test

### Testing

The easiest way to get to a place where you can test the applications is to simly run the following from the repository root

```
pnpm dev 
```

This will spin up the following applications

- [Web App](http://localhost:3000) - Main Web App for the QA Engineer Test
- [Documentation Web App](http://localhost:3001) - Documentation Web App **(Not Yet Used)**
- [Public API](http://localhost:3002) - Main REST API for the QA Engineer Test

### E2E Testing

**NOTE:** Please keep in mind though that if you have any `pnpm dev` command or any other apps running you must first stop them
before running any of the e2e commands below. Additionally, please note that you must make sure ports 3000-3002 are not in use by any other app. 


#### UI Driven

To run e2e tests, run the following command:

```
pnpm run test:e2e
```

Which will run any API, UI, and then bring up the Cypress UI to select individual tests to test against.

#### Headless

To run e2e tests in headless mode, run the following command:

```
pnpm run test:e2e:headless
```

Which will run any API, UI, and then run the cypress tests in headless mode.

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
pnpm dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpm dlx turbo link
```