import { When, Then } from '@cucumber/cucumber';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';

let home: HomePage;
let contact: ContactPage;

When('user opens contact page', async () => {
  await home.clickContact();
  contact = new ContactPage(page);
  await contact.verifyContactPage();
});

When('user fills contact form', async () => {
  await contact.fillForm();
  await contact.submitForm();
});

Then('contact form should be submitted', async () => {
  await contact.verifySuccess();
});