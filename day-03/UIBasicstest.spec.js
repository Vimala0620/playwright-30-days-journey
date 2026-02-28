const { test, expect } = require('@playwright/test');

test.only('Browser context playwright test', async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/loginPagePractise/');
  const title = await page.title();
  console.log(title);
  await expect(page).toHaveTitle(/Login/);

  await page.locator('#username').fill('rahulshettyacademy');
  await page.locator('#password').fill('learning');
  await page.locator('#signInBtn').click();
  //await expect(page.locator('.text-center')).toHaveText('Welcome, rahulshettyacademy');
  //capturing error message
  console.log(await page.locator('style*="display: block;"').textContent('Incorrect username or password.'));
  await expect(page.locator('style*="display:block;"')).toContainText('Incorrect');

});

test('Pageplaywright test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  const title = await page.title();
  console.log(title);
  await expect(page).toHaveTitle(/Google/);
});
