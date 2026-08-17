import { test, expect } from '@playwright/test';

import { LoginPage } from '../Pages/LoginPage.js';
import { AddToCart } from '../Pages/AddToCart.js';
import { Checkout } from '../Pages/Checkout.js';

import loginData from '../testdata/loginData.json' with { type: 'json' };
import productsData from '../testdata/productsData.json' with { type: 'json' };
import checkoutData from '../testdata/checkoutData.json' with { type: 'json' };


test('Checkout Test - Complete Order Successfully', async ({ page }) => {

    // --------------------------------
    // 1. Open SauceDemo
    // --------------------------------

    await page.goto('https://www.saucedemo.com/');


    // --------------------------------
    // 2. Login
    // --------------------------------

    const loginPage = new LoginPage(page);

    await loginPage.login(
        loginData.validUsers[0].username,
        loginData.validUsers[0].password
    );


    // --------------------------------
    // 3. Add Product to Cart
    // --------------------------------

    const addToCart = new AddToCart(page);

    await addToCart.addProduct(
        productsData.products[0].productId
    );


    // --------------------------------
    // 4. Open Cart
    // --------------------------------

    await page.locator('#shopping_cart_container a').click();

    await expect(page.locator('.title'))
        .toHaveText('Your Cart');


    // --------------------------------
    // 5. Checkout
    // --------------------------------

    const checkout = new Checkout(page);

    await checkout.checkout(
        checkoutData.checkout[0].firstName,
        checkoutData.checkout[0].lastName,
        checkoutData.checkout[0].postalCode
    );


    // --------------------------------
    // 6. Verify Order Completed
    // --------------------------------

    await expect(
        page.locator('.complete-header')
    ).toHaveText('Thank you for your order!');

});