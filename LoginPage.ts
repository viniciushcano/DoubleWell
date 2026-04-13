import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async verifyLoginVisible() {
    await expect(this.page.locator('text=Login to your account')).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.page.fill('[data-qa="login-email"]', email);
    await this.page.fill('[data-qa="login-password"]', password);
    await this.page.click('[data-qa="login-button"]');
  }

  async verifyLoggedUser() {
    await expect(this.page.locator('text=Logged in as')).toBeVisible();
  }

  async verifyError() {
    await expect(this.page.locator('text=Your email or password is incorrect!')).toBeVisible();
  }

  async logout() {
    await this.page.click('a[href="/logout"]');
  }
}