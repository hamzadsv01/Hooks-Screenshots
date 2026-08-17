import { expect } from '@playwright/test';

class HomePage {

    constructor(page) {
        this.page = page;

        // Home Page title
        this.pageTitle = page.locator('//*[@id="header_container"]/div[2]/span');

        // Sort dropdown
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');

        // Cart button
        this.cartButton = page.locator('[data-test="shopping-cart-link"]');
    }

    async verifyHomePage() {
        await expect(this.pageTitle).toBeVisible();
        await expect(this.pageTitle).toHaveText('Products');
    }

    async sortProducts(value) {
        await this.sortDropdown.selectOption(value);
    }

    async openCart() {
        await this.cartButton.click();
    }
}

module.exports = { HomePage };