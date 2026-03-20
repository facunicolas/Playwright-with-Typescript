import { test, expect } from '../../utils/test-base';
import { createRandomUser } from '../../utils/DataFactory';

test.beforeEach(async ({ formPage }) => {
    await formPage.navigate();
});

test('Completar y enviar el formulario', async ({ formPage }) => {
 
    const testData = createRandomUser();

    //llenar el formulario con los datos de "FormData"
    await formPage.fillForm(testData);

    //enviar el formulario
    await formPage.submitForm();

    //verificacion básica de que el modal de confirmación aparece
    const modalTitle = await formPage.formResult();
    await expect(modalTitle).toBeVisible();
    await expect(modalTitle).toHaveText('Thanks for submitting the form');

    //verificar que los datos se muestran correctamente en la tabla del modal
    await formPage.validateFormResultTable(testData);

});