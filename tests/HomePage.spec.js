import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage.js';
import { HomePage } from '../Pages/HomePage.js';

test('Home Page Test', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    // Login
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');

    // Home Page
    const homePage = new HomePage(page);

    // Verify Home Page title
    await homePage.verifyHomePage();

});