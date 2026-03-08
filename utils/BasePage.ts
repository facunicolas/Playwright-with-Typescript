import { test as base } from '@playwright/test';
import { WebTablesPage } from '../pages/DemoQAPages/WebTablesPage';
import { CommonActions } from '../utils/CommonActions';
import { CheckboxPage } from '../pages/DemoQAPages/CheckBoxPage';
import { ButtonsPage } from '../pages/DemoQAPages/ButtonsPage';

// Definimos los tipos de lo que vamos a inyectar
type MyFixtures = {
    webTablesPage: WebTablesPage;
    commonActions: CommonActions;
    checkBoxPage: CheckboxPage;
    buttonsPage: ButtonsPage;
};

// Exportamos un NUEVO objeto 'test' que extiende al original
export const test = base.extend<MyFixtures>({
    // Definimos cómo se crea cada objeto
    commonActions: async ({ page }, use) => {
        await use(new CommonActions(page));
    },

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
    }

});

// Exportamos también 'expect' para tenerlo todo en un solo lugar
export { expect } from '@playwright/test';