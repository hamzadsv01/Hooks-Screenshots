import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage.js';
import { AddToCart } from '../Pages/AddToCart.js';
import { Logout } from '../Pages/LogoutPage.js';
import productsData from '../testdata/productsData.json' with { type: 'json' };

test('Login, Add Products and Logout', async ({ page }) => {

    // Get product indexes from terminal command
    const input = process.env.PRODUCTS || '0';

    const selectedIndexes = input
        .split(',')
        .map(index => Number(index.trim()));

    // Display selected products
    console.log('\nProducts selected:');

    selectedIndexes.forEach(index => {
        console.log(`- ${productsData.products[index].productName}`);
    });

    // Open website
    await page.goto('https://www.saucedemo.com/');

    // Login
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');

    // Add products
    const addToCart = new AddToCart(page);

    for (const index of selectedIndexes) {

        const product = productsData.products[index];

        await addToCart.addProduct(product.productId);
    }

    // Open cart
    await addToCart.openCart();

    // Logout
    const logout = new Logout(page);
    await logout.logout();

    // Verify logout
    await expect(page).toHaveURL('https://www.saucedemo.com/');
});