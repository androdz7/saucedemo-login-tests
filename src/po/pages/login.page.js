import BasePage from "./base.page";

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
        return await this.errorMsg;
    }
};