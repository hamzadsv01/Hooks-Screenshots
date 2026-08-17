import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage.js';
import { Logout } from '../Pages/LogoutPage.js';

test('Logout Test', async ({ page }) => {

    // Open SauceDemo
    await page.goto('https://www.saucedemo.com/');

    // Login
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');

    // Logout
    const logout = new Logout(page);
    await logout.logout();

    // Verify user is back on login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');

});