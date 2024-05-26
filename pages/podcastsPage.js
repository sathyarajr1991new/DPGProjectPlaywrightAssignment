import BasePage from './basePage'
import { podCastUrl } from '../config'
import {
	iframeElement,
	acceptCookieName,
} from '../pageobjects/homePageObjects'
import {
	podastListsTitle,
	podcastPageTitle,
	podcastVideoTitleText,
} from '../pageobjects/podcastPageObjects'

class PodcastsPage extends BasePage {
	constructor(page) {
		super(page)
	}
	async openApp() {
		try {
			await super.open(podCastUrl);
			await this.acceptCookies(iframeElement, acceptCookieName);
			await this.waitForPageLoad();
		} catch (error) {
			throw new Error(`Unable to land on this url: ${podCastUrl}`)
		}
	}

	async verifyPageTitle(title) {
		try {
			await this.verifyElementText(podcastPageTitle, title);
		} catch (error) {
			throw new Error(`Unable to verify the expected page title as: ${title}`)
		}
	}

	async clickOnRandomPodcastAndReturnText() {
		try {
			await this.page.waitForSelector(podastListsTitle)
			const items = await this.page.$$(podastListsTitle)
			// Check if items are found
			if (items.length === 0) {
				console.error(`No items found with the provided selector-${podastListsTitle}`)
				return
			}
			// Generate a random index
			const randomIndex = Math.floor(Math.random() * items.length)
			console.log(`Random index: ${randomIndex}`)
			const randomItem = items[randomIndex]
			const textValue = await randomItem.textContent()
			console.log(`value: ${textValue}`)
			await randomItem.click();
			console.log(`Clicked item at index ${randomIndex}`)
			return textValue.replace(/^\S+\s*/, '')
		} catch (error) {
			throw new Error(`Unable to perform actions on the podcast page`)
		}
	}

	async verifySearchResults(titleText) {
		try {
			await this.verifyElementContainsText(podcastVideoTitleText, titleText);
		} catch (error) {
			throw new Error(`Unable to verify with the expected text: ${titleText}`)
		}
	}
}
export default PodcastsPage