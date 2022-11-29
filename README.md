# Whitebox QA Engineer Testing Monorepo

This Monorepo contains all setup necessary for QA Engineers Candidates to use their knowledge to create automated tests using the Whitebox Tech Stack.

## Testing Expectations

1. A Branch of this repository should be created against this repo's `main` branch.
2. Create Cypress tests that test as much of the site as possible (Dashboard, Settings, Tables) Admin pages.
3. All Cypress tests should be organized and created using BDD (Behavior Driven Development) methodology.
4. All tests should be in files that represent their UI route.
5. All Cypress tests should go under the testing/cypress/e2e folder.
6. All Cypress tests should use either Arrange-Act-Assert Pattern or the BDD version Given-When-Then but should not use both.
7. Where Cypress Tests are not possible, create manual tests and add them to a .md document stating why it is not possible or why it is not a good idea to test in an automated fashion. 

Extra Points for:

- Showing knowledge of different CSS selectors in your tests.
- Reuse of functions for similar areas of code.
- Creation of Cypress Commands to reuse code.
- Interception of Network Calls.
- Aliasing of Intercepts.
- Using Fixtures to represent data.

## What's inside?

This repo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app - The base of the app is a modified template from [Creative Tim](https://www.creative-tim.com/) called [Notus-NextJs](https://github.com/creativetimofficial/notus-nextjs)
- `ui`: a stub React component library shared by both `web` and `docs` applications
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

### E2E Testing

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