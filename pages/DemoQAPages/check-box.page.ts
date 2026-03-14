import { Locator, Page } from "@playwright/test";

export class CheckboxPage {
    private readonly switcher: Locator;
    private readonly treeTitles: Locator;
    private readonly checkboxHome: Locator;
    private readonly successTexts: Locator;

    constructor(private readonly page: Page) {
        this.switcher = page.locator('.rc-tree-switcher.rc-tree-switcher_close');
        this.treeTitles = page.locator('.rc-tree-title');
        this.checkboxHome = page.getByRole('checkbox', { name: 'Select Home' });
        this.successTexts = page.locator('.text-success');
    }

    async navigate() {
        await this.page.goto(`${process.env.demoQAUrl}/checkbox`);
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