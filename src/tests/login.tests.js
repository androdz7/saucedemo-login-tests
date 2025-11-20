import { pages } from './../po/';
import { expect } from '@wdio/globals';
import logger from './../utils/logger.js';

describe('Login functionality', () => {
    beforeEach(async () => {
        await pages('login').open();
        
    });

    it('Given user is on login page, When user tries empty login, Then error should appear', async () => { 
        logger.info('Starting test: empty username');

        await pages('login').usernameInput.setValue(process.env.USER_USERNAME);
        await pages('login').passwordInput.setValue(process.env.USER_PASSWORD);

        await pages('login').usernameInput.clearValue();
        await pages('login').passwordInput.clearValue();

        await pages('login').loginBtn.click();

        logger.warn('Checking error message...');
        const errorMsg = pages('login').getErrorMessage();
        expect(errorMsg).toHaveText(expect.stringContaining('Username is required'));

        logger.info('Error message validated successfully.');
    });

    it('Given user is on login page, When user tries to log with empty password field, Then error should appear', async () => {
        logger.info('Starting test: empty password');

        await pages('login').usernameInput.setValue(process.env.USER_USERNAME);
        await pages('login').passwordInput.setValue(process.env.USER_PASSWORD);
            
        await pages('login').passwordInput.clearValue();

        await pages('login').loginBtn.click();

        logger.warn('Checking error message...');
        const errorMsg = pages('login').getErrorMessage();
        expect(errorMsg).toHaveText(expect.stringContaining('Password is required'));

        logger.info('Error message validated successfully.');
    });

    it('Given user logs in succesfully, When providing the right credentials, Then should return page title', async () => {
        logger.info('Starting test: succsefull login');

        await pages('login').usernameInput.setValue(process.env.USER_USERNAME);
        await pages('login').passwordInput.setValue(process.env.USER_PASSWORD);
        await pages('login').loginBtn.click();
        
        logger.warn('Checking page title');
        await expect(pages('dashboard').pageTitle).toHaveText('Swag Labs');

        logger.info('Successful login validated.');
    });      
});

