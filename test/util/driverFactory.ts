import BrowserObject = WebdriverIO.Browser;

export class DriverFactory<T = BrowserObject> {
    private readonly _browser: T | undefined;

    constructor(myBrowser?: T) {
        this._browser = myBrowser;
    }

    get browser(): T | BrowserObject {
        return this._browser || browser;
    }
}
