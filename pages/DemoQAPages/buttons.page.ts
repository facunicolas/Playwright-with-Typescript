import { Page, Locator } from '@playwright/test';

export class ButtonsPage {
    private readonly doubleClickButton: Locator;
    private readonly rightClickButton: Locator;
    private readonly dynamicClickButton: Locator;
    private readonly doubleClickMessage: Locator;
    private readonly rightClickMessage: Locator;
    private readonly dynamicClickMessage: Locator;

    constructor(private readonly page: Page) {

        //selectores
        this.doubleClickButton = this.page.locator('#doubleClickBtn');
        this.rightClickButton = this.page.locator('#rightClickBtn');
        this.dynamicClickButton = this.page.getByRole('button', { name: 'Click Me', exact: true });
        this.doubleClickMessage = this.page.locator('#doubleClickMessage');
        this.rightClickMessage = this.page.locator('#rightClickMessage');
        this.dynamicClickMessage = this.page.locator('#dynamicClickMessage');
    }

    async navigate() {
        await this.page.goto(`${process.env.demoQAUrl}/buttons`);
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
