import BasePage from './basePage'
import {
	username,
	password,
	loginNavLink,
	loginOrContinueButton,
} from '../pageobjects/loginPageObjects'

class LoginPage extends BasePage {
	constructor(page) {
		super(page)
	}

	async enterUserEmailAndContinue(user) {
		try {
			await this.waitAndClick(loginNavLink);
			await this.waitAndFill(username, user);
			await this.waitAndClick(loginOrContinueButton);
		} catch (error) {
			throw new Error(`Unable to enter the userName: ${user}`)
		}
	}

	async enterUserPasswordAndLogin(pwd) {
		try {
			await this.waitAndFill(password, pwd)
			await this.waitAndClick(loginOrContinueButton);
		} catch (error) {
			throw new Error(`Unable to enter the password: *********`)
		}
	}

	async loginAsNormalUser(user, pwd) {
		try {
			await this.enterUserEmailAndContinue(user);
			await this.enterUserPasswordAndLogin(pwd);
		} catch (error) {
			throw new Error(`Unable to login with the credentials:userName: ${user}, pwd:*********`)
		}
	}
}
export default LoginPage
