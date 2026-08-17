class Logout {

    constructor(page) {
        this.page = page;

        // Menu button
        this.menuButton = page.locator('#react-burger-menu-btn');

        // Logout button
        this.logoutButton = page.locator('#logout_sidebar_link');
    }

    async logout() {
        await this.menuButton.click();
        await this.logoutButton.click();
    }
}

module.exports = { Logout };