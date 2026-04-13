import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { AccountPage } from '../pages/AccountPage';

let page: any;
let home: HomePage;
let login: LoginPage;
let account: AccountPage;

let email = `test${Date.now()}@mail.com`;
let password = '123456';

Given('user opens browser', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();

  home = new HomePage(page);
  login = new LoginPage(page);
  account = new AccountPage(page);
});

When('user accesses login page', async () => {
  await home.go();
  await home.clickSignup();
  await login.verifyLoginVisible();
});

When('user logs with correct credentials', async () => {
  await login.login(email, password);
});

When('user logs with incorrect credentials', async () => {
  await login.login('wrong@mail.com', 'wrong');
});

Then('login should be successful', async () => {
  await login.verifyLoggedUser();
});

Then('login should fail', async () => {
  await login.verifyError();
});

When('user logs out', async () => {
  await login.logout();
});

Then('user is redirected to login page', async () => {
  await login.verifyLoginVisible();
});

Then('user deletes account', async () => {
  await account.deleteAccount();
  await account.verifyDeleted();
});