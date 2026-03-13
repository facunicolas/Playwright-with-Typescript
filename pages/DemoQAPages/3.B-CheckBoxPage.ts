import { Locator, Page } from "@playwright/test";

class CheckboxPage {
    page: Page;
    baseUrl: string = 'https://demoqa.com';
    switcher: Locator;
    treeTitles: Locator;
    checkboxHome: Locator;
    successTexts: Locator;

    constructor(page: Page) {
        this.page = page;

        // Selectores
        this.switcher = page.locator('.rc-tree-switcher.rc-tree-switcher_close');
        this.treeTitles = page.locator('.rc-tree-title');
        this.checkboxHome = page.getByRole('checkbox', { name: 'Select Home' });
        this.successTexts = page.locator('.text-success');
        this.baseUrl = 'https://demoqa.com';
    }

    async navigate() {
        await this.page.goto(`${this.baseUrl}/checkbox`);
    }

    async expandAllTree() {
        while (await this.switcher.count() > 0) {
            await this.switcher.first().click();
            await this.page.waitForTimeout(200);
        }
    }

    async getAllTreeTitles() {
        return await this.treeTitles.evaluateAll((nodes: HTMLElement[]) => 
            nodes.map(n => n.innerText)
        );
    }

    async selectHomeCheckbox() {
        await this.checkboxHome.first().check();
    }

    async getAllResults() {
        return await this.successTexts.evaluateAll((nodes: HTMLElement[]) => 
            nodes.map(n => n.innerText)
        );
    }

    async normalizeText(text: Array<string>) {
        return text.map(t => t.split('.')[0].replace(/\s+/g, '').toLowerCase());
    }

}
export { CheckboxPage };