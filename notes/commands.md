# Playwright Important Commands 🚀

This file contains frequently used Playwright commands for quick reference.

---day1----

## 🔹 Project Setup

### Initialize new Playwright project
```bash
npm init playwright@latest
Install Playwright in existing project
npm install -D @playwright/test
npx playwright install
🔹 Running Tests
Run all tests
npx playwright test
Run tests in headed mode (see browser UI)
npx playwright test --headed
Run specific test file
npx playwright test tests/UIBasicsTest.spec.js
Run specific test by name
npx playwright test -g "Browser context"
Run tests in specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
🔹 Debugging
Run in debug mode
npx playwright test --debug
Pause test execution (add inside test)
await page.pause();
Run with UI mode (interactive test runner)
npx playwright test --ui
🔹 Reports
Open HTML report
npx playwright show-report
🔹 Trace Viewer
Run with trace enabled manually
npx playwright test --trace on
Open trace file
npx playwright show-trace trace.zip
🔹 Code Generation Tool
Generate test code automatically
npx playwright codegen https://example.com
🔹 Common Git Commands
Stage changes
git add .
Commit changes
git commit -m "Day X - Description"
Push to GitHub
git push
🔹 Basic Test Template
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
📌 Important Notes

Test files must be inside tests/ folder

Test file name must end with .spec.js or .test.js

Playwright automatically provides the page fixture in tests


---
Day2
----------
## 🔹 CSS Locator Examples

### Select by ID
page.locator('#username')
Select by Class
page.locator('.form-control')
Select by Attribute
page.locator('input[type="text"]')
Select by Text
page.locator('text=Sign In')
Fill Input Field
await page.locator('#username').fill('myusername');
Click Button
await page.locator('#signInBtn').click();
Get Text
const text = await page.locator('.error').textContent();

---

# 🔥 Important Upgrade Suggestion (Professional Tip)

Instead of:

```js
page.locator('#username')

Better:

page.getByLabel('Username')
page.getByRole('button', { name: 'Sign In' })
