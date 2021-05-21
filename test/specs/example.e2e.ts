import {LoginPage} from '../pageobjects/login.page';

describe('My Login application: multi', () => {
    it('should login with valid credentials', async () => {
        let chrome: LoginPage = new LoginPage(multiremotebrowser['myChromeBrowser']);
        await chrome.open();
        await chrome.login('tomsmith', 'SuperSecretPassword!');
        let firefox: LoginPage = new LoginPage(multiremotebrowser['myFirefoxBrowser']);
        await firefox.open();
        await firefox.login('tomsmith', 'SuperSecretPassword!');
    });
});


