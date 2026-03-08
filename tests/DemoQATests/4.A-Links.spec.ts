import { test, expect } from '../../utils/Test-Base';

test.beforeEach(async ({ linksPage }) => {
    await linksPage.navigate();
});

test('Verificar que el link "Home" redirige a la página principal', async ({ linksPage, page }) => {

    // Espera a abrir la nueva ventana y la carga en la variable newPage
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        linksPage.homeLink.click()
    ]);

    // Compara la url de la nueva página con la url base del linksPage
    await expect(newPage).toHaveURL(`${linksPage.baseUrl}`)
});

test('Verificar que el link Home "Dynamic" redirige a la página principal', async ({ linksPage, page }) => {
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        linksPage.dynamicLink.click()
    ]);
    await expect(newPage).toHaveURL(`${linksPage.baseUrl}`)
});

test('Verificar que el link "Created" devuelve el status 201', async ({ linksPage, page }) => {

    await test.step('Hacer click en el link "Created"', async () => {
        const responsePromise = page.waitForResponse(response => response.url()
            .includes(`${linksPage.baseUrl}/created`));
        await linksPage.createdLink.click();

        const response = await responsePromise;

        expect(response.status(),
            `Falló la petición a ${response.url()}. 
         Esperado: 201
         Recibido: ${response.status()}`)
            .toBe(201);
    });
});

test('Verificar que el link "No Content" devuelve el status 204', async ({ linksPage, page }) => {

    await test.step('Hacer click en el link "No Content"', async () => {
        const responsePromise = page.waitForResponse(response => response.url()
            .includes(`${linksPage.baseUrl}/no-content`));
        await linksPage.noContentLink.click();
        const response = await responsePromise;
        
        expect(response.status(),
            `Falló la petición a ${response.url()}. 
        Esperado: 204
        Recibido: ${response.status()}`)
            .toBe(204);
    });
});

test('Verificar que el link "Moved" devuelve el status 301', async ({ linksPage, page }) => {

    await test.step('Hacer click en el link "Moved"', async () => {
        const responsePromise = page.waitForResponse(response => response.url()
            .includes(`${linksPage.baseUrl}/moved`));
        await linksPage.movedLink.click();
        const response = await responsePromise;
        
        expect(response.status(),
            `Falló la petición a ${response.url()}. 
        Esperado: 301
        Recibido: ${response.status()}`)
            .toBe(301);
    });
});

test('Verificar que el link "Bad Request" devuelve el status 400', async ({ linksPage, page }) => {

    await test.step('Hacer click en el link "Bad Request"', async () => {
        const responsePromise = page.waitForResponse(response => response.url()
            .includes(`${linksPage.baseUrl}/bad-request`));
        await linksPage.badRequestLink.click();
        const response = await responsePromise;
        
        expect(response.status(),
            `Falló la petición a ${response.url()}. 
        Esperado: 400
        Recibido: ${response.status()}`)
            .toBe(400);
    });
});

test('Verificar que el link "Unauthorized" devuelve el status 401', async ({ linksPage, page }) => {

    await test.step('Hacer click en el link "Unauthorized"', async () => {
        const responsePromise = page.waitForResponse(response => response.url()
            .includes(`${linksPage.baseUrl}/unauthorized`));
        await linksPage.unauthorizedLink.click();
        const response = await responsePromise;
        
        expect(response.status(),
            `Falló la petición a ${response.url()}. 
        Esperado: 401
        Recibido: ${response.status()}`)
            .toBe(401);
    });
});

test('Verificar que el link "Forbidden" devuelve el status 403', async ({ linksPage, page }) => {

    await test.step('Hacer click en el link "Forbidden"', async () => {
        const responsePromise = page.waitForResponse(response => response.url()
            .includes(`${linksPage.baseUrl}/forbidden`));
        await linksPage.forbiddenLink.click();
        const response = await responsePromise;
        
        expect(response.status(),
            `Falló la petición a ${response.url()}. 
        Esperado: 403
        Recibido: ${response.status()}`)
            .toBe(403);
    });
});

test('Verificar que el link "Not Found" devuelve el status 404', async ({ linksPage, page }) => {

    await test.step('Hacer click en el link "Not Found"', async () => {
        const responsePromise = page.waitForResponse(response => response.url()
            .includes(`${linksPage.baseUrl}/invalid-url`));
        await linksPage.notFoundLink.click();
        const response = await responsePromise;
        
        expect(response.status(),
            `Falló la petición a ${response.url()}. 
        Esperado: 404
        Recibido: ${response.status()}`)
            .toBe(404);
    });
});


