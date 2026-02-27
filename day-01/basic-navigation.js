const { test, expect } = require('@playwright/test');

test('Browser context', async ({ page }) => {

  await page.goto('https://rahulshettyacademy.com/loginPagePractise/');

  await expect(page).toHaveTitle(/Login/);

});
