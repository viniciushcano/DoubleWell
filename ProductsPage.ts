import { Page, expect } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async verifyProductsPage() {
    await expect(this.page.locator('text=All Products')).toBeVisible();
  }

  async viewFirstProduct() {
    await this.page.click('a[href="/product_details/1"]');
  }

async verifyProductList() {
  await expect(this.page.locator('.features_items')).toBeVisible();
}

async verifyProductDetails() {
  await expect(this.page.locator('.product-information')).toBeVisible();
}
}