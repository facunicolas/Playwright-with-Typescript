import { Page } from '@playwright/test';

class CommonActions {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }
}
export { CommonActions };