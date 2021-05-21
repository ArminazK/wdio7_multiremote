import {Page} from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { // @ts-ignore
        return this.browser.$('#username') }
    get inputPassword () { // @ts-ignore
        return this.browser.$('#password') }
    get btnSubmit () { // @ts-ignore
        return this.browser.$('button[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username: string, password: string) {
        // @ts-ignore
        await (await this.inputUsername).setValue(username);
        // @ts-ignore
        await (await this.inputPassword).setValue(password);
        // @ts-ignore
        await (await this.btnSubmit).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

