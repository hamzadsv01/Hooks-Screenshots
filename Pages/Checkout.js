import { expect } from '@playwright/test';

class Checkout {

    constructor(page) {
        this.page = page;

        // Checkout button
        this.checkoutButton = page.locator('#checkout');

        // Checkout information fields
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');

        // Continue button
        this.continueButton = page.locator('#continue');

        // Finish button
        this.finishButton = page.locator('#finish');

        // Order confirmation message
        this.completeHeader = page.locator('.complete-header');
    }


    // Open checkout page
    async clickCheckout() {

        await this.checkoutButton.click();

    }


    // Fill checkout information
    async fillCheckoutInformation(firstName, lastName, postalCode) {

        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);

    }


    // Continue to overview page
    async clickContinue() {

        await this.continueButton.click();

    }


    // Finish the order
    async clickFinish() {

        await this.finishButton.click();

    }


    // Complete checkout process
    async checkout(firstName, lastName, postalCode) {

        await this.clickCheckout();

        await this.fillCheckoutInformation(
            firstName,
            lastName,
            postalCode
        );

        await this.clickContinue();

        await this.clickFinish();

    }
}
module.exports = { Checkout };