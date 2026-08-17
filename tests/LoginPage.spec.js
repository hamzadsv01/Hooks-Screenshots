import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage.js';
import loginData from '../testdata/loginData.json' with { type: 'json' };

test('Login Test Case', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    const loginPage = new LoginPage(page);

    await loginPage.login(
        loginData.validUsers[0].username,
        loginData.validUsers[0].password
    );

    await expect(page).toHaveURL(/inventory/);

});