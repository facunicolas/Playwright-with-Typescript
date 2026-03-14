import { Locator, Page } from "@playwright/test";

class BrokenLinksPage {
    page: Page;
    baseUrl: string = 'https://demoqa.com';
    brokenImage: Locator;
    validLink: Locator;
    brokenLink: Locator;

    constructor(page: Page) {
        this.page = page;
        
        this.baseUrl = 'https://demoqa.com';
        this.brokenImage = page.locator('img[src="/images/Toolsqa.jpg"]');
        this.validLink = page.getByRole('link', { name: 'Click Here for Valid Link' })
        this.brokenLink = page.getByRole('link', { name: 'Click Here for Broken Link' })
    }

    async navigate() {
        await this.page.goto(`${this.baseUrl}/broken`);
    }

    async ObtainResponseStatus(link: Locator, endpointPath: string) {
        // 1. Esperamos cualquier respuesta
        const responsePromise = this.page.waitForResponse(response =>
            response.url().includes(endpointPath)
        );

        await link.click();

        // 2. Retornamos la respuesta específica
        return await responsePromise;
    }
}

export { BrokenLinksPage };
