import { Locator, Page } from "@playwright/test";

class AutoCompletePage {
    page: Page
    baseUrl: string = 'https://demoqa.com';
    autoCompleteMultipleInput: Locator;
    autoCompleteSingleInput: Locator;
    autoCompleteSingleText: Locator;
    clearMultipleButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.autoCompleteMultipleInput = page.locator('#autoCompleteMultipleInput');
        this.autoCompleteSingleInput = page.locator('#autoCompleteSingleInput');
        this.autoCompleteSingleText = page.locator('.auto-complete__single-value');
        this.clearMultipleButton = page.locator('.auto-complete__clear-indicator');
    }

    async navigate() {
        await this.page.goto(`${this.baseUrl}/auto-complete`);
    }

    async enterText(Locator: Locator, text: string) {
        await Locator.fill(text);
    }

    async selectOption(option: string) {
        await this.page.locator(`text=${option}`).click();
    }

    //obtener todos los div clase "auto-complete__multi-value"
    get allSelectedOptions() {
        return this.page.locator('.auto-complete__multi-value');
    }  

    //seleccionar la primera opcion sugerida
    async selectFirstOption() {
        await this.page.locator('.auto-complete__option').first().click();
    }
    
    //borrar todas las opciones seleccionadas
    async clearAllSelectedOptions() {
        await this.clearMultipleButton.click();
    }

}

export { AutoCompletePage };