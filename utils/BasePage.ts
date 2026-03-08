import { test as base } from '@playwright/test';
import { WebTablesPage } from '../pages/DemoQAPages/WebTablesPage';
import { CheckboxPage } from '../pages/DemoQAPages/CheckBoxPage';
import { ButtonsPage } from '../pages/DemoQAPages/ButtonsPage';
import { LinksPage } from '../pages/DemoQAPages/LinksPage';

// Definimos los tipos de lo que vamos a inyectar
type MyFixtures = {
    webTablesPage: WebTablesPage;
    checkBoxPage: CheckboxPage;
    buttonsPage: ButtonsPage;
    linksPage: LinksPage;
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


});

export { expect } from '@playwright/test';
export { Page } from '@playwright/test';