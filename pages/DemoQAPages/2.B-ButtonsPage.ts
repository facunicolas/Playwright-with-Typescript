import { Page, Locator } from '@playwright/test';


class ButtonsPage {
    page: Page;
    baseUrl: string = 'https://demoqa.com';
    doubleClickButton: Locator;
    rightClickButton: Locator;
    dynamicClickButton: Locator;
    doubleClickMessage: Locator;
    rightClickMessage: Locator;
    dynamicClickMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        //selectores
        this.doubleClickButton = this.page.locator('#doubleClickBtn');
        this.rightClickButton = this.page.locator('#rightClickBtn');
        this.dynamicClickButton = this.page.getByRole('button', { name: 'Click Me', exact: true });
        this.doubleClickMessage = this.page.locator('#doubleClickMessage');
        this.rightClickMessage = this.page.locator('#rightClickMessage');
        this.dynamicClickMessage = this.page.locator('#dynamicClickMessage');
        this.baseUrl = 'https://demoqa.com';
    }

    async navigate() {
        await this.page.goto(`${this.baseUrl}/buttons`);
    }

    async doubleClick() {
        await this.doubleClickButton.dblclick();
    }

    async rightClick() {
        await this.rightClickButton.click({ button: 'right' });
    }

    async dynamicClick() {
        await this.dynamicClickButton.click();
    }

}

export { ButtonsPage }; 
