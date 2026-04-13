import { Page, expect } from '@playwright/test';

export class ContactPage {
  constructor(private page: Page) {}

  async fillForm() {
    await this.page.fill('[data-qa="name"]', 'Test');
    await this.page.fill('[data-qa="email"]', 'test@test.com');
    await this.page.fill('[data-qa="subject"]', 'Test Subject');
    await this.page.fill('[data-qa="message"]', 'Test Message');

    await this.page.setInputFiles('input[name="upload_file"]', 'test.txt');

    await this.page.click('[data-qa="submit-button"]');
  }

  async verifySuccess() {
    await expect(this.page.locator('text=Success! Your details have been submitted successfully.')).toBeVisible();
  }

  async verifyContactPage() {
  await expect(this.page.locator('text=GET IN TOUCH')).toBeVisible();
}

async submitForm() {
  await this.page.click('[data-qa="submit-button"]');
  await this.page.on('dialog', dialog => dialog.accept());
}
}