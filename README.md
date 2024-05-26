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

Scenario Description: User launch and login into the site and verify user is able to login to the application.

Reason for choosing scenario 1 : login feature testing, and verify the user is logged in right - its priority p0 case

Testname: LogInUser.test.js
```
 
```bash
Scenario 2: Guest user search for an article and verify the information

Scenario Description: User search for an article and verify appropriate message is displayed for searched article, and verify the serached item list is present

Reason for choosing scenario 2 : Case for positive search with verification of searched list 
considering search is p1 case .Altering test case for search article in testData will make the test case reusable to search any article 

Testname: SearchForAnArticle.test.js
```

```bash
Scenario: 3: User launch the podcast url and verify user is able to click and see random podcast videos

Scenario Description: User launch podcase url and see user is able to see podcast videos 

Reason for choosing scenario 3 : User opens random Video podcast and verify the page is landed into randomly chosen podcast 
verify the video plays ,considering it to be p1 case and writing the tets case generically to work for any random podcast .improves the test case usability 

Testname: BrowsePodcast.test.js
```

#### Installation

Install the dependencies and devDependencies to run the test.

- Clone (OR) Download this repo as zip folder on to your local machine
- Navigate to project's directory on terminal and run the following commands:

Clone the repository

```bash
git clone https://github.com/sathyarajr1991new/DPGProjectPlaywrightAssignment.git
```

Install dependencies

```bash
npm install
npx playwright install
```

#### Run application

Run tests in chrome browser

```bash
npm run test:chrome - For tests only on chrome browser
```

Run tests in firefox browser

```bash
npm run test:firefox - For tests only on firefox browser
```

Run tests in firefox browser by groupname

```bash
npm run test:smoke - For tests only on firefox browser
```

Run tests in safari browser

```bash
npm run test:safari - For tests only on safari browser
```

Run tests in edge browser

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
Repo: https://github.com/sathyarajr1991new/DPGProjectPlaywrightAssignment.git
```
