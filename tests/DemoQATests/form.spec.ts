import { test, expect } from '../../utils/test-base';
import { FormData } from '../../pages/DemoQAPages/form.page';

test.beforeEach(async ({ formPage }) => {
    await formPage.navigate();
});

test('Completar y enviar el formulario', async ({ formPage }) => {
 
    const testData: FormData = {
        firstName: 'Pedro',
        lastName: 'Juarez',
        email: 'pedro.juarez@example.com',
        gender: 'Male',
        mobile: '1234567890',
        dob: '10 Aug 1995',
        subjects: ['Maths', 'Physics'],
        hobbies: ['Sports', 'Reading'],
        picturePath: 'utils\\sampleFile.jpeg',
        address: '123 Main St',
        state: 'NCR',
        city: 'Delhi'
    };

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
