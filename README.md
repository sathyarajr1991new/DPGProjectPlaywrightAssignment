### Playwright Test Runner With JavaScript

An example project demonstrating automation of playwright tests using page object design pattern framework.

#### Application Under Test

We are using https://www.ad.nl/ as the Application Under Test. This App is a **React.js** Frontend

- URL: https://www.ad.nl/ and https://www.ad.nl/podcasts
- OS : macOS 
- IDE : Visual Studio Code
 
#### Scenarios

```bash
Scenario 1: User launch the site and able to login

Scenario Description: User launch and login into the site and verify user is able to login to the application. This is like a Smoke test.

Testname: TC_01_LogInUser.test.js
```
 
```bash
Scenario 2: User search a article and verify use is able to see some results

Scenario Description: User search a article and verify the user can see the matching results

Testname: TC_02_SearchForAnArticle.test.js
```

```bash
Scenario: 3: User launch the podcast url and verify user is able to click and see random podcast videos

Scenario Description: User launch podcase url and see user is able to see podcast videos

Testname: TC_03_BrowsePodcast.test.js
```

#### Installation

Install the dependencies and devDependencies to run the test.

- Clone (OR) Download this repo as zip folder on to your local machine
- Navigate to project's directory on terminal and run the following commands:

Clone the repository

```bash
git clone https://github.com/sathyarajr1991new/PlaywrightFw.git
```

Install dependencies

```bash
npm install
npx playwright install
```

#### Run application

Run tests in Parallel chrome

```bash
npm run test:chrome - For tests only on chrome browser
```

Run tests in Parallel firefox

```bash
npm run test:firefox - For tests only on firefox browser
```

Run tests in Parallel safari

```bash
npm run test:safari - For tests only on safari browser
```

Run tests in Parallel edge

```bash
npm run test:edge - For tests only on edge browser
```

Run tests in Parallel on all browsers (chrome, safari, edge and firefox)

```bash
npm run test  - For tests only on all browsers
```

#### Playwright Test Report 

```bash
Html-test-report :
npm run test:chrome (OR)  npm run test:edge (OR) npm run html-report
```

#### Allure Test Report

```bash
Allure-test-report :
1.	npm run allure:clean
2.	npm run test:firefox (OR) npm run test:safari
3.	npm run allure:report
```

#### GitLab

```bash
Repo: https://github.com/sathyarajr1991new/PlaywrightFw
Pipelines: 
```
