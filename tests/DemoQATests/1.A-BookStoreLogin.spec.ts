import { test, expect } from '../../utils/Test-Base';

/*
NOTA: En un caso real el archivo .env no deberia ser incluido en el repositorio
pero a fines practicos lo incluí para que se puedan ejecutar los tests y se
pueda verificar cual fue la logica que usé para los mismos
*/

test("Prueba de login en Book Store", async ({ bookStoreLoginPage }) => {

    await bookStoreLoginPage.navigate();
    await bookStoreLoginPage.login(process.env.tqaBookStoreUserName!,
        process.env.tqaBookStorePassword!);
    await expect(bookStoreLoginPage.usernameLabel)
        .toHaveText(process.env.tqaBookStoreUserName!);

});
