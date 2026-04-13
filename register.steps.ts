import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignupPage } from '../pages/SignupPage';
import { AccountPage } from '../pages/AccountPage';

let page: Page;
let home: HomePage;
let signup: SignupPage;
let account: AccountPage;

Given('user opens browser', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();

  home = new HomePage(page);
  signup = new SignupPage(page);
  account = new AccountPage(page);
});

When('user navigates to home page', async () => {
  await home.goToHome();
});

Then('home page should be visible', async () => {
  await home.verifyHomeVisible();
});

When('user clicks signup', async () => {
  await home.clickSignupLogin();
});

Then('signup page should be visible', async () => {
  await signup.verifySignupVisible();
});

When('user registers new account', async () => {
  const email = `test${Date.now()}@mail.com`;
  await signup.signup('Test User', email);
  await account.fillAccountDetails();
});

Then('account should be created', async () => {
  await account.verifyAccountCreated();
});