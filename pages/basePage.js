import { expect } from '@playwright/test'

class BasePage {
	constructor(page) {
		this.page = page
	}

	async open(url) {
		await this.page.goto(url);
	}

	async getTitle() {
		await this.page.title();
	}

	async pause() {
		await this.page.pause()
	}

	async getUrl() {
		await this.page.url()
	}

	async wait() {
		this.page.waitForTimeout(10000)
	}

	async waitForPageLoad() {
		await this.page.waitForLoadState('domcontentloaded')
	}

	async waitAndClick(selector) {
		try {
			await this.page.click(selector)
		} catch (error) {
			throw new Error(`Unable to perform action on this selector - >${selector}`)
		}
	}

	async waitAndHardClick(selector) {
		try {
			await this.page.$eval(selector, element => element.click())
		} catch (error) {
			throw new Error(`Unable to perform action on this selector - >${selector}`)
		}
	}

	async waitAndFill(selector, text) {
		try {
			await this.page.fill(selector, text)
		} catch (error) {
			throw new Error(`Unable to perform action on this selector - >${selector}`)
		}
	}

	async keyPress(selector, key) {
		try {
			await this.page.press(selector, key)
		} catch (error) {
			throw new Error(`Unable to perform action on this selector - >${selector}`)
		}
	}

	async takeScreenShot() {
		await expect(await this.page.screenshot()).toMatchSnapshot(
			'MyScreenShot.png'
		)
	}

	async verifyElementText(selector, text) {
		try {
			const textValue = await this.page.textContent(selector)
			expect(textValue.trim()).toBe(text)
		} catch (error) {
			throw new Error(`Unable to perform action on this selector - >${selector}`)
		}
	}

	async verifyElementContainsText(selector, expectedText) {
		try {
			const elementLocator = await this.page.locator(selector)
			await expect(elementLocator).toContainText(expectedText)
		} catch (error) {
			throw new Error(`Unable to perform action on this selector - >${selector}`)
		}
	}

	async verifyElementAttribute(selector, attribute, value) {
		try {
			await this.page.waitForSelector(selector);
			const textValue = await this.page.getAttribute(selector, attribute);
			expect(textValue.trim()).toBe(value)
			console.log(`Element by attribute value: "${textValue}" found.`)
		} catch (error) {
			throw new Error(`Unable to perform action on this selector - >${selector}`)
		}
	}

	async verifyResultsListIsGreaterThanZero(selector) {
		try {
			const rowsCount = await this.page.locator(selector).count()
			expect(rowsCount).toBeGreaterThan(0)
		} catch (error) {
			throw new Error(`Unable to perform action on this selector - >${selector}`)
		}
	}

	async isElementVisible(selector) {
		try {
			await this.page.waitForSelector(selector);
			const element = await this.page.locator(selector)
			const isVisible = await element.isVisible()
			await expect(isVisible).toBeTruthy()
		} catch (error) {
			throw new Error(`Unable to locate the element using selector - > ${selector}`)
		}
	}

	async isElementEnabled(selector) {
		try {
			await this.page.waitForSelector(selector);
			// Check if the element is disabled
			await this.page.evaluate(selector => {
				const element = document.querySelector(selector);
				return element && element.disabled;
			}, selector);
		} catch (error) {
			throw new Error(`Unable to perform action on this selector - >${selector}`)
		}
	}

	async acceptCookies(selector, textName) {
		try {
			// Wait for both iframes to load and get the iframe elements
			const frameElement = await this.page.waitForSelector(selector);
			if (frameElement) {
				const iframe = await frameElement.contentFrame();
				await iframe.click(`text=${textName}`);
				console.log(`User is able to click on "${textName}" button`)
			} else {
				console.log(`User is unable to click on "${textName}" button`);
			}
		} catch (error) {
			throw new Error(`User unable to perform action on this selector - >${selector}`)
		}
	}
}
export default BasePage
