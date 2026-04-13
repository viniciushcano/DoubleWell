import { When, Then } from '@cucumber/cucumber';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';

let home: HomePage;
let products: ProductsPage;

When('user opens products page', async () => {
  await home.clickProducts();
  products = new ProductsPage(page);
  await products.verifyProductsPage();
});

Then('products list should be visible', async () => {
  await products.verifyProductList();
});

When('user opens first product', async () => {
  await products.viewFirstProduct();
});

Then('product details should be visible', async () => {
  await products.verifyProductDetails();
});