/* Scenario 2: 
Search for an article

Scenario Description: 
Guest user search for an article and verify the information

Test test.steps:
1. User navigates to home screen
2. User clicks on Search Icon
3. Enter article and search the results
4. Verify the search article results
*/

import test from '../testFixtures/fixture'
import fs from 'fs'
const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

test.describe(`@smoke: Search an article and verify the results`,() => {
		test(`Search an article and verify the search results`, async ({
			homePage,
            articleSearchPage
		}) => {
			await test.step(
				`1. Launch the site and verify page title`, async () => {
					await homePage.openApp();
					await homePage.verifyPageTitle(testData.homePageTitle);
				})
			await test.step(
				`2. User clicks on Search Icon`,async () => {
					await homePage.clickOnSearchIcon()
                    await articleSearchPage.verifySearchPage()
				} 
			)
            await test.step(
			    `3. Enter article and verify search button is enabled`,async () => {
					await articleSearchPage.enterQueryInSearch(testData.article_name)
                    await articleSearchPage.verifySearchButton()
				}
			)
            await test.step(
			    `4. Click on Search button and verify the results`,async () => {
					await articleSearchPage.clickOnSearchButton();
                    await articleSearchPage.verifySearchResults(testData.article_name)
					await articleSearchPage.verifySearchArticleListIsGreaterThanZero()
				}
			)
		})
	})
