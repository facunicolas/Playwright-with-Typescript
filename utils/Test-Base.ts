import { test as base } from '@playwright/test';
import { BookStoreLoginPage } from '../pages/DemoQAPages/1.B-BookStoreLoginPage';
import { ButtonsPage } from '../pages/DemoQAPages/2.B-ButtonsPage';
import { CheckboxPage } from '../pages/DemoQAPages/3.B-CheckBoxPage';
import { LinksPage } from '../pages/DemoQAPages/4.B-LinksPage';
import { WebTablesPage } from '../pages/DemoQAPages/5.B-WebTablesPage';
import { BrokenLinksPage } from '../pages/DemoQAPages/6.B-BrokenLinksPage';
import { AccordianPage } from '../pages/DemoQAPages/7.B-AccordianPage';
import { AutoCompletePage } from '../pages/DemoQAPages/8.B-AutoCompletePage';
import { DatePickerPage } from '../pages/DemoQAPages/9.B-DatePickerPage';

// Definimos los tipos de lo que vamos a inyectar
type MyFixtures = {
    webTablesPage: WebTablesPage;
    checkBoxPage: CheckboxPage;
    buttonsPage: ButtonsPage;
    linksPage: LinksPage;
    bookStoreLoginPage: BookStoreLoginPage;
    brokenLinksPage: BrokenLinksPage;
    accordianPage: AccordianPage;
    autoCompletePage: AutoCompletePage;
    datePickerPage: DatePickerPage;
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
    },

    brokenLinksPage: async ({ page }, use) => {
        const blPage = new BrokenLinksPage(page);
        await use(blPage);
    },

    accordianPage: async ({ page }, use) => {
        const accPage = new AccordianPage(page);
        await use(accPage);
    },

    autoCompletePage: async ({ page }, use) => {
        const acPage = new AutoCompletePage(page);
        await use(acPage);
    },

    datePickerPage: async ({ page }, use) => {
        const dpPage = new DatePickerPage(page);
        await use(dpPage);
    }

});

export { expect } from '@playwright/test';
export { Page } from '@playwright/test';