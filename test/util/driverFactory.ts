import BrowserObject = WebdriverIO.Browser;
import MultiRemoteBrowserObject = WebdriverIO.MultiRemoteBrowser;

export class DriverFactory {
    private readonly _browser: BrowserObject| MultiRemoteBrowserObject | undefined ;

    constructor(browser?: BrowserObject | MultiRemoteBrowserObject) {
        this._browser = browser;
    }

    get browser(): BrowserObject | MultiRemoteBrowserObject {
        return this._browser || browser;
    }
}
