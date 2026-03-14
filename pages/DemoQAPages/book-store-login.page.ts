import { Page, Locator } from '@playwright/test';

class BookStoreLoginPage {
    page: Page
    baseUrl: string = 'https://demoqa.com'
    usernameInput: Locator
    passwordInput: Locator
    loginButton: Locator
    usernameLabel: Locator

    constructor(page: Page) {
        this.page = page;

        //selectores
        this.usernameInput = this.page.locator('#userName');
        this.passwordInput = this.page.locator('#password');
        this.loginButton = this.page.locator('#login');
        this.usernameLabel = this.page.locator('#userName-value');
        this.baseUrl = 'https://demoqa.com';
    }

    async navigate() {
        await this.page.goto(`${this.baseUrl}/login`);
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(String(username));
        await this.passwordInput.fill(String(password));
        await this.loginButton.click();
    }
}

export { BookStoreLoginPage };