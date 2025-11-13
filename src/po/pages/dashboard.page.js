import BasePage from "./base.page.js";

export default class DashboardPage extends BasePage {
    constructor() {
        super('/inventory.html');
    }

    get pageTitle() {
        return $('//div[@class="app_logo"]');
    }
}