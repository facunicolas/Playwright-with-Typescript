import { Locator, Page } from '@playwright/test';

class LinksPage {
    page: Page
    baseUrl: string = 'https://demoqa.com';
    homeLink: Locator;
    dynamicLink: Locator
    createdLink: Locator
    noContentLink: Locator
    movedLink: Locator
    badRequestLink: Locator
    unauthorizedLink: Locator
    forbiddenLink: Locator
    notFoundLink: Locator

    constructor(page: Page) {
        this.page = page;

        this.homeLink = page.locator('#simpleLink');
        this.dynamicLink = page.locator('#dynamicLink');
        this.createdLink = page.getByRole('link', { name: 'Created' })
        this.noContentLink = page.locator('#no-content');
        this.movedLink = page.locator('#moved');
        this.badRequestLink = page.locator('#bad-request');
        this.unauthorizedLink = page.locator('#unauthorized');
        this.forbiddenLink = page.locator('#forbidden');
        this.notFoundLink = page.locator('#invalid-url');
        this.baseUrl = 'https://demoqa.com';

    }

    async navigate() {
        await this.page.goto(`${this.baseUrl}/links`);
    }

    async ObtainResponseStatus(link: Locator, endpointPath: string) {
        // 1. Esperamos una respuesta que CONTENGA la ruta específica
        const responsePromise = this.page.waitForResponse(response =>
            response.url().includes(endpointPath)
        );

        await link.click();

        // 2. Retornamos la respuesta específica
        return await responsePromise;
    }
}
export { LinksPage };