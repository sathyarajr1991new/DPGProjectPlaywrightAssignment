import { test as fixture } from '@playwright/test'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage'
import ArticleSearchPage from '../pages/articleSearchPage'
import PodcastsPage from '../pages/podcastsPage'

const test = fixture.extend({
	homePage: async ({ page }, use) => {
		await use(new HomePage(page))
	},
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page))
	},
	articleSearchPage: async ({ page }, use) => {
		await use(new ArticleSearchPage(page))
	},
	podcastsPage: async ({ page }, use) => {
		await use(new PodcastsPage(page))
	},
})
export default test
