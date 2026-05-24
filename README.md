# tsb-assessment

This project has solution to tsb-assessment. The folder structure for the project is divided into "Test Case" and "Automation". For Task#1, the test case document is stored under "Test Case" folder. Task#2 and Task#3 solution is stored under "Automation" folder. Project tree is mentioned below.

```
│   README.md
│
|───Test Case
|    └───Task#1
|           homepage-test-cases.md
|
├───Automation
│   ├───Task#2
│   │   ├───features
│   │   │   │   search.feature
│   │   │   │
│   │   │   ├───step_definitions
│   │   │   │       search.steps.js
│   │   │   │
│   │   │   └───support
│   │   │           hooks.js
│   │   │
│   │   └───pages
│   │           SearchPage.js
│   │
│   └───Task#3
│       └───tests
│           └───api
│                   categories.spec.js

```

## Test Case

## Automation

This part of the project automates the search functionality on the homepage `tmsandbox.co.nz` and API testing on `api.trademe.co.nz/v1/Categories.json` using playwright & javascript.

### Pre-requiste

1. Node.js

### Prepare the environment to run the test on Windows

1. Open command prompt.
1. Change directory to a suitable location on filesystem to clone the project
1. Clone the repository & change directory in terminal into the clone repository
1. Change directory into `Automation`

```
cd Automation
```

1. Run the following command to install playwright & cucumber for playwright.

```
npm install playwright @cucumber/cucumber playwright-cucumber
npx playwright install
```

### Steps to run Task#2 Search UI Automation

1. Execute the following command to run the feature file

```
npx cucumber-js Task#2/features/search.feature
```

### Steps to run Task#3 API Automation

1. Execute the following command to run the tests

```
npx playwright test tests/api/categories.spec.js
```
