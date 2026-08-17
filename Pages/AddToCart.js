class AddToCart {

    constructor(page) {
        this.page = page;

        this.cartButton = page.locator('[data-test="shopping-cart-link"]');
    }

    async addProduct(productId) {
        await this.page.locator(
            `[data-test="add-to-cart-${productId}"]`
        ).click();
    }

    async openCart() {
        await this.cartButton.click();
    }
}

module.exports = { AddToCart };