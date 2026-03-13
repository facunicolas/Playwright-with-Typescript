import { Locator, Page } from "@playwright/test";

class AccordianPage {
    page: Page
    baseUrl: string = 'https://demoqa.com';


    constructor(page: Page) {
        this.page = page;
        this.baseUrl = 'https://demoqa.com';
    }

    async navigate() {
        await this.page.goto(`${this.baseUrl}/accordian`);
    }

    //opensection recibe un numero del 1 al 3 para abrir la seccion correspondiente
    async openSection(sectionNumber: number) {
        const sectionHeader = this.page.locator(`#section${sectionNumber}Heading`);
        await sectionHeader.click();
    }

    //obtener todos los button de class "accordion-button"
    get obtainAllAccordians() {
        return this.page.locator('.accordion-button');
    };   

}

export { AccordianPage };