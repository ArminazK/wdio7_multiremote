/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
import {DriverFactory} from "../util/driverFactory";

export class Page extends DriverFactory{
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path: string) {
        // @ts-ignore
        return this.browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}
