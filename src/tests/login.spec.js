import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import loginData from '../data/login.data.json';

test('Invalid login shows error', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLogin();
  await loginPage.login(
    loginData.invalidUser.username,
    loginData.invalidUser.password
  );

  await expect(loginPage.errorMessage)
    .toContainText('Your username is invalid');
});
