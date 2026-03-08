import { test, expect } from '../../utils/Test-Base';

test("Prueba de login en Book Store", async ({ bookStoreLoginPage }) => {

    await bookStoreLoginPage.navigate();
    await bookStoreLoginPage.login(process.env.tqaBookStoreUserName!,
        process.env.tqaBookStorePassword!);
    await expect(bookStoreLoginPage.usernameLabel)
        .toHaveText(process.env.tqaBookStoreUserName!);

});
