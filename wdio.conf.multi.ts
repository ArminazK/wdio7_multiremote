import {config as sharedConf} from './wdio.conf';

export const config = {
    ...sharedConf,
    ...{
        capabilities: {
            myChromeBrowser: {
                capabilities: {
                    browserName: 'chrome'
                }
            },
            myFirefoxBrowser: {
                capabilities: {
                    browserName: 'firefox'
                }
            }
        },
    }
};
