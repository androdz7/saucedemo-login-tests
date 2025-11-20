import BasePage from "./base.page.js";

export default class LoginPage extends BasePage {
    constructor() {
        super('/');
    }

    get loginBtn() {
        return $('//input[@id="login-button"]');
    }

    get usernameInput() {
        return $('//input[@id="user-name"]');
    }

    get passwordInput() {
        return $('//input[@id="password"]');
    }

    get errorMsg() {
        return $('//h3[@data-test="error"]');
    }

    async getErrorMessage() {
        await this.errorMsg.waitForDisplayed({ timeout: 5000 });
        return this.errorMsg;
    }

    async open() {
        await super.open();

        await this.loginBtn.waitForDisplayed({
            timeout: 10000,
            timeoutMsg: 'Login button not visible - Login page did not load'
        });
    }
};