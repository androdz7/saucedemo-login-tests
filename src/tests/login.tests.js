import { pages } from './../po/';
import { expect } from '@wdio/globals';

describe('Login functionality', () => {
    beforeEach(async () => {
        await pages('login').open();
        
    });

    it('Given user is on login page, When user tries empty login, Then error should appear', async () => { 
        await pages('login').usernameInput.setValue(process.env.USER_USERNAME);
        await pages('login').passwordInput.setValue(process.env.USER_PASSWORD);

        await pages('login').usernameInput.clearValue();
        await pages('login').passwordInput.clearValue();

        await pages('login').loginBtn.click();

        const errorMsg = pages('login').getErrorMessage();
        expect(errorMsg).toHaveText(expect.stringContaining('Username is required'));
    });

    it('Given user is on login page, When user tries to log with empty password field, Then error should appear', async () => {
        await pages('login').usernameInput.setValue(process.env.USER_USERNAME);
        await pages('login').passwordInput.setValue(process.env.USER_PASSWORD);
            
        await pages('login').passwordInput.clearValue();

        await pages('login').loginBtn.click();

        const errorMsg = pages('login').getErrorMessage();
        expect(errorMsg).toHaveText(expect.stringContaining('Password is required'));
    });

    it('Given user logs in succesfully, When providing the right credentials, Then should return page title', async () => {
        await pages('login').usernameInput.setValue(process.env.USER_USERNAME);
        await pages('login').passwordInput.setValue(process.env.USER_PASSWORD);
        await pages('login').loginBtn.click();
        
        await expect(pages('dashboard').pageTitle).toHaveText('Swag Labs');
    });      
});

