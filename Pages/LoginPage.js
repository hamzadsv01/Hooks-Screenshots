// import { test, expect } from '@playwright/test';
// class LoginPage {

//     constructor(page) {
//         this.page = page;

//         this.username = page.locator('[data-test="username"]');
//         this.password = page.locator('[data-test="password"]');
//         this.loginButton = page.locator('[data-test="login-button"]');
//         //this is for assertion 
//         this.ProductLabel = page.locator('#header_container > div.header_secondary_container > span');
//     }
//     async attachScreenshot(name) {
// await test.info().attach(name, {
// body: await this.page.screenshot(),
// contentType: 'image/png',
// });
// }

//     async login(username, password) {
//         await this.username.fill(username);
//         await this.attachScreenshot('02 - After entering username');
//         await this.password.fill(password);
//         await this.attachScreenshot('03 - After entering password');
//         await this.loginButton.click();
//         await this.attachScreenshot('04 - After clicking Login');

//     }
// }

// module.exports = { LoginPage };


// export class LoginPage {

//     constructor(page) {
//         this.page = page;

//         this.username = page.locator('#user-name');
//         this.password = page.locator('#password');
//         this.loginButton = page.locator('#login-button');
//     }

//     async gotoLoginPage() {
//         await this.page.goto('https://www.saucedemo.com/');
//     }

//     async login(username, password) {
//         await this.username.fill(username);
//         await this.password.fill(password);
//         await this.loginButton.click();
//     }
// };

//this is for hooks 
import { test } from '@playwright/test';
import { attachStepScreenshot } from '../utilities/screenshot.js';

class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login');
        this.message = page.locator('.welcome_menu');
    }

    async login(username, password) {

        await test.step('01 - After URL open', async () => {
            await attachStepScreenshot(
                this.page,
                '01 - After URL open'
            );
        });

        await test.step('02 - Enter username', async () => {
            await this.username.fill(username);

            await attachStepScreenshot(
                this.page,
                '02 - After username'
            );
        });

        await test.step('03 - Enter password', async () => {
            await this.password.fill(password);

            await attachStepScreenshot(
                this.page,
                '03 - After password'
            );
        });

        await test.step('04 - Click Login', async () => {
            await this.loginButton.click();

            await attachStepScreenshot(
                this.page,
                '04 - After login click'
            );
        });
    }
}

export default LoginPage;


