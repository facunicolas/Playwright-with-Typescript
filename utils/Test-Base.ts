import { test as base } from '@playwright/test';
import { WebTablesPage } from '../pages/DemoQAPages/5.B-WebTablesPage';
import { CheckboxPage } from '../pages/DemoQAPages/3.B-CheckBoxPage';
import { ButtonsPage } from '../pages/DemoQAPages/2.B-ButtonsPage';
import { LinksPage } from '../pages/DemoQAPages/4.B-LinksPage';
import { BookStoreLoginPage } from '../pages/DemoQAPages/1.B-BookStoreLoginPage';

// Definimos los tipos de lo que vamos a inyectar
type MyFixtures = {
    webTablesPage: WebTablesPage;
    checkBoxPage: CheckboxPage;
    buttonsPage: ButtonsPage;
    linksPage: LinksPage;
    bookStoreLoginPage: BookStoreLoginPage;
};

// Exportamos un NUEVO objeto 'test' que extiende al original
export const test = base.extend<MyFixtures>({
    // Definimos cómo se crea cada objeto
    webTablesPage: async ({ page }, use) => {
        const wtPage = new WebTablesPage(page);
        await use(wtPage);
    },

    checkBoxPage: async ({ page }, use) => {
        const cbPage = new CheckboxPage(page);
        await use(cbPage);
    },

    buttonsPage: async ({ page }, use) => {
        const btnPage = new ButtonsPage(page);
        await use(btnPage);
    },

    linksPage: async ({ page }, use) => {
        const lnkPage = new LinksPage(page);
        await use(lnkPage);
    },

    bookStoreLoginPage: async ({ page }, use) => {
        const bsPage = new BookStoreLoginPage(page);
        await use(bsPage);
    }

});

export { expect } from '@playwright/test';
export { Page } from '@playwright/test';