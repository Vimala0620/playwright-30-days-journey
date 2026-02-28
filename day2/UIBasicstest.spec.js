const { test, expect } = require('@playwright/test');

test('Browser context playwright test', async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/loginPagePractise/');

  await expect(page).toHaveTitle(/Login/);

});

test('Pageplaywright test', async ({ page }) => {
  await page.goto('https://www.google.com/');

  await expect(page).toHaveTitle(/Google/);
});
