import { pages } from './../po/';
import LoginPage from './../po/pages/login.page';
import { expect } from '@wdio/globals';

const loginPage = new LoginPage();

describe('Login Page', () => {
    beforeEach(async () => {
        await pages('login').open();
        
    });

    it('Test Login form with empty credentials', async () => { 
        await pages('login').usernameInput.setValue(process.env.USER_USERNAME);
        await pages('login').passwordInput.setValue(process.env.USER_PASSWORD);

        await pages('login').usernameInput.clearValue();
        await pages('login').passwordInput.clearValue();

        await pages('login').loginBtn.click();

        const errorMsg = pages('login').getErrorMessage();
        expect(errorMsg).toHaveText(expect.stringContaining('Username is required'));
    });

    it('Test Login form with credentials by passing Username', async () => {
        await pages('login').usernameInput.setValue(process.env.USER_USERNAME);
        await pages('login').passwordInput.setValue(process.env.USER_PASSWORD);
            
        await pages('login').passwordInput.clearValue();

        await pages('login').loginBtn.click();

        const errorMsg = pages('login').getErrorMessage();
        expect(errorMsg).toHaveText(expect.stringContaining('Password is required'));
    });

    it('Test Login form with credentials by passing Username & Password', async () => {
        await pages('login').usernameInput.setValue(process.env.USER_USERNAME);
        await pages('login').passwordInput.setValue(process.env.USER_PASSWORD);
        await pages('login').loginBtn.click();
        
        await expect(pages('dashboard').pageTitle).toHaveText('Swag Labs');
    });      
});

