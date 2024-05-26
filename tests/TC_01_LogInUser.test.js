/* Scenario 1: 
Login as a normal user

Scenario Description: 
User opens website and login to it and verify user is able to login or not.

Test test.steps:
1. User navigates to home screen
2. User is login and verify the user info
*/

import test from '../testFixtures/fixture'
import fs from 'fs'
const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

test.describe(`@smoke: Login as a normal user to the application`,() => {
		test(`Login as normal user to the application`, async ({
			homePage,
			loginPage,
		}) => {
			await test.step(
				`1. Launch the site and verify page title`, async () => {
					await homePage.openApp();
					await homePage.verifyPageTitle(testData.homePageTitle);
				})
			await test.step(
				`2. Login as normal user and verify user is logged in`,async () => {
					await loginPage.loginAsNormalUser(testData.normal_user,testData.normal_user_pwd);
					await homePage.verifyUserProfileText(testData.user_name);
				}
			)
		})
	})
