export class LogoutPage {

    constructor(page) {

        this.page = page;

        this.menuButton = page.locator('#react-burger-menu-btn');

        this.logoutButton = page.locator('#logout_sidebar_link');
    }

    async logout() {

        await this.menuButton.click();

        await this.logoutButton.click();

    }
}