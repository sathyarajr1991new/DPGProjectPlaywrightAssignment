import BasePage from './basePage'
import { baseUrl } from '../config'
import {
    iframeElement,
    acceptCookieName,
    userProfileLink,
    landingPageTitle,
    searchIcon
} from '../pageobjects/homePageObjects'

class HomePage extends BasePage {
    constructor(page) {
        super(page)
    }

    async openApp() {
        try {
            await super.open(baseUrl);
            await this.acceptCookies(iframeElement, acceptCookieName);
            await this.waitForPageLoad();
        } catch (error) {
            throw new Error(`Unable to land on this url: ${baseUrl}`)
        }
    }

    async verifyPageTitle(homePageTitle) {
        try {
            await this.verifyElementText(landingPageTitle, homePageTitle);
        } catch (error) {
            throw new Error(`Unable to verify the expected page title as: ${homePageTitle}`)
        }
    }

    async clickOnSearchIcon() {
        try {
            await this.waitAndClick(searchIcon);
        } catch (error) {
            throw new Error(`Unable to click on search Icon using locator - > ${searchIcon}`)
        }
    }

    async verifyUserProfileText(text) {
        try {
            await this.verifyElementAttribute(userProfileLink, 'title', text);
        } catch (error) {
            throw new Error(`Unable to verify userName using locator - > ${userProfileLink} for user: ${text}`)
        }
    }
}
export default HomePage