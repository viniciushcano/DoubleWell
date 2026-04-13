import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goToHome() {
    await this.page.goto('/');
  }

  async verifyHomeVisible() {
    await expect(this.page.locator('body')).toBeVisible();
  }

  async clickSignupLogin() {
    await this.page.click('a[href="/login"]');
  }

  async clickContact() {
    await this.page.click('a[href="/contact_us"]');
  }

  async clickProducts() {
    await this.page.click('a[href="/products"]');
  }

  async clickTestCases() {
    await this.page.click('a[href="/test_cases"]');
  }
}