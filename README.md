
# Cypress Tests for Job Application Page

This repository contains Cypress tests for the Job Application Page of an Angular application.
Test case path: cypress/e2e/1-galytix-qa-tests

## Running Tests

### Setup

1. Install Cypress globally if you haven't already:

   ```bash
   npm install -g cypress
   ```

2. Navigate to your project directory where Cypress is installed.

### Running Tests

To run Cypress tests, follow these steps:

#### Headless Mode

To run Cypress tests in headless mode (without opening the Cypress Test Runner GUI):

```bash
npx cypress run
```

This command will execute all your Cypress tests headlessly and provide the results in the terminal.

#### Cypress Test Runner

To open the Cypress Test Runner GUI and run tests interactively:

```bash
npx cypress open
```

This command will open the Cypress Test Runner GUI, allowing you to select and run individual test files or all tests. You can see the test results, including logs and screenshots, in the Cypress Test Runner interface.

### Viewing Results

#### Console

When running tests in headless mode (`cypress run`), you'll see the test results, including any logs or error messages, directly in the terminal/console where you executed the Cypress commands.

#### Cypress Test Runner

When running tests in the Cypress Test Runner GUI (`cypress open`), you can view the detailed test results interactively within the Cypress Test Runner interface. It provides a user-friendly way to see test outcomes, logs, screenshots, and other relevant information for each test case.
```

You can copy and paste this content into your `readme.md` file in your project repository. Adjust it as needed based on your project structure and requirements.
