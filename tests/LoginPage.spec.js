// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../Pages/LoginPage.js';
// import loginData from '../testdata/loginData.json' with { type: 'json' };

import { before } from "node:test";

// test.describe('login',=>{


// test('Login Test Case', async ({ page }) => {

//     await page.goto('https://www.saucedemo.com/');

//     const loginPage = new LoginPage(page);

//     await loginPage.login(
//         loginData.validUsers[0].username,
//         loginData.validUsers[0].password
//     );

//     await expect(page).toHaveURL(/inventory/);

// });
// });

// before hooks 


// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../Pages/LoginPage.js';
// import loginData from '../testdata/loginData.json' with { type: 'json' };

// test.describe('Login', () => {

//     test('Login Test Case', async ({ page }) => {

//         const loginPage = new LoginPage(page);
//         const data = loginData.validUsers[0];

//         await test.step('01 - Open Login Page', async (step) => {

//             await loginPage.gotoLoginPage();

//             await step.attach('01 - Open Login Page', {
//                 body: await page.screenshot({
//                     fullPage: true
//                 }),
//                 contentType: 'image/png'
//             });

//         });

//         await test.step('02 - Enter Credentials and Login', async (step) => {

//             await loginPage.login(
//                 data.username,
//                 data.password
//             );

//             await step.attach('02 - Enter Credentials and Login', {
//                 body: await page.screenshot({
//                     fullPage: true
//                 }),
//                 contentType: 'image/png'
//             });

//         });

//         await test.step('03 - Verify User is Successfully Logged In', async (step) => {

//             await expect(page).toHaveURL(/inventory/);

//             await step.attach('03 - Login Successful', {
//                 body: await page.screenshot({
//                     fullPage: true
//                 }),
//                 contentType: 'image/png'
//             });

//         });

//     });

// });

// for hooks 
import { test, expect } from '../fixtures/testSetup.js';

import loginData from '../testdata/loginData.json' with { type: 'json' };

import LoginPage from '../Pages/LoginPage.js';

import { attachStepScreenshot } from '../Utils/screenshots.js';


test.describe('Login', () => {

    test('Login Test Case with valid user', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const data = loginData.validUsers[0];

        await test.step('Enter credential and login', async () => {

            await loginPage.login(
                data.username,
                data.password
            );

        });

        await test.step('Verify Welcome Message on Landing page', async () => {

            await expect(loginPage.message.first())
                .toHaveText(data.ExpectedMsg);

            await attachStepScreenshot(
                page,
                '05 - After welcome message verification'
            );

        });

    });

});