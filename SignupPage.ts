import { Page, expect } from '@playwright/test';

export class SignupPage {
  constructor(private page: Page) {}

  async verifySignupVisible() {
    await expect(this.page.locator('text=New User Signup!')).toBeVisible();
  }

  async signup(name: string, email: string) {
    await this.page.fill('input[data-qa="signup-name"]', name);
    await this.page.fill('input[data-qa="signup-email"]', email);
    await this.page.click('button[data-qa="signup-button"]');
  }
}