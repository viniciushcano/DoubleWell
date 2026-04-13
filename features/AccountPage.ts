import { Page, expect } from '@playwright/test';

export class AccountPage {
  constructor(private page: Page) {}

  async fillAccountDetails() {
    await this.page.check('#id_gender1');
    await this.page.fill('#password', '123456');
    await this.page.selectOption('#days', '10');
    await this.page.selectOption('#months', '5');
    await this.page.selectOption('#years', '1990');

    await this.page.check('#newsletter');
    await this.page.check('#optin');

    await this.page.fill('#first_name', 'Test');
    await this.page.fill('#last_name', 'User');
    await this.page.fill('#address1', 'Rua Teste');
    await this.page.selectOption('#country', 'Canada');
    await this.page.fill('#state', 'SP');
    await this.page.fill('#city', 'Sao Paulo');
    await this.page.fill('#zipcode', '00000');
    await this.page.fill('#mobile_number', '11999999999');

    await this.page.click('button[data-qa="create-account"]');
  }

  async verifyAccountCreated() {
    await expect(this.page.locator('text=ACCOUNT CREATED!')).toBeVisible();
  }

async deleteAccount() {
  await this.page.click('a[href="/delete_account"]');
}

async verifyDeleted() {
  await expect(this.page.locator('text=ACCOUNT DELETED!')).toBeVisible();
}
}
