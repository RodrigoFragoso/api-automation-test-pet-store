# Petstore Supertest Tests

## Why API Tests at the Integration Layer?

API tests at the integration layer are crucial for ensuring that different components of a system work correctly when combined. They offer several benefits, including:

- **Early Error Detection**: By testing the interaction between different parts of the system, issues can be identified and fixed before they reach the production environment.
- **Comprehensive Coverage**: Integration tests cover scenarios that isolated unit tests might not capture, ensuring that communication between services and components is robust.
- **Implementation Confidence**: With well-defined integration tests, development teams can be more confident that their changes will not break existing functionality.
- **Ease of Maintenance**: By detecting integration issues early, system maintenance becomes more manageable and less prone to introducing new bugs.
- **Business Requirement Validation**: Integration tests help ensure that business requirements are met by verifying that the system as a whole behaves as expected.

This project contains integration tests for the Petstore API, using Jest and Supertest libraries. These tests are intended solely for the practice of API test automation using Supertest with Jest.

## About
This project contains integration tests for the Petstore API, using Jest and Supertest libraries. These tests are intended solely for the practice of API test automation using Supertest with Jest. The goal is to ensure that the main operations of the API are functioning as expected.

## Prerequisites

Before starting, make sure you have the following installed on your machine:

- Node.js (version 20.12.2)
- npm (version 10.5.0)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <REPOSITORY_URL>
   ```

2. Navigate to the project directory:

   ```bash
   cd petstore-supertest-tests
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Create a `.env.test.production` file at the root of the project and add the URL of the API to be tested:

   ```
   API_URL=https://your-api-url.com
   ```

## Running the Tests

### Integration Tests

To run the integration tests, use the following command:

```bash
npm run test:integration:prd
```

This command will execute the tests defined in the `src/tests/integration` directory and generate HTML and XML reports in the `reports-integration-tests` folder.

### 📊  Test Report

After running the tests, you can view the HTML report at:

```
https://rodrigofragoso.github.io/api-automation-test-pet-store/integration-test-report.html
```

This report provides a detailed view of all test results, including passed, failed, and skipped tests.

## Project Structure

- `src/tests/integration`: Contains integration tests for the different functionalities of the API.
- `reports-integration-tests`: Directory where test reports are generated.
- `jest.integration.config.js`: Jest configuration for integration tests.

## Linting

To check code compliance with the defined style rules, run:

```bash
npm run lint
```

To automatically fix style issues, run:

```bash
npm run lint:fix
```

## Contribution

If you wish to contribute to this project, please follow the contribution guidelines and open a pull request.

## Contact

For more information, contact the project maintainer.

