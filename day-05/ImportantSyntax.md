Playwright Learnings So Far (Cheat Sheet)
Setup & Execution

Install Playwright

npm init playwright@latest

Run tests

npx playwright test

Run with browser visible

npx playwright test --headed

Run in debug mode

npx playwright test --debug

Open report

npx playwright show-report

Test Structure

Import test library

const { test, expect } = require('@playwright/test');

Basic test format

test('test name', async ({ page }) => {})

Page Actions

Open URL

await page.goto(url)

Get page title

await page.title()

Assert title

await expect(page).toHaveTitle()

Locators

Create locator

page.locator(selector)

By ID

#username

By class

.form-control

By attribute

input[type="text"]

By text

page.getByText("Sign In")

By role

page.getByRole('button', { name: 'Login' })

Element Actions

Fill text

await locator.fill(value)

Click element

await locator.click()

Get text

await locator.textContent()

Assertions

Element visible

await expect(locator).toBeVisible()

Contains text

await expect(locator).toContainText(text)

Exact text

await expect(locator).toHaveText(text)

Radio/checkbox checked

await expect(locator).toBeChecked()

Handling Multiple Elements

Locator list

page.locator('.card-body')

Count elements

await locator.count()

First element

locator.first()

Element by index

locator.nth(index)

All text contents

await locator.allTextContents()

Dropdown Handling

Select dropdown option

await locator.selectOption("Teacher")

Select by value

selectOption({ value: "consult" })

Select by label

selectOption({ label: "Teacher" })

Combobox Handling

Steps:

Click dropdown

Select option

Example:

await combo.click()

const option = page.getByText("A Root Option")

await option.click()

Verify selection

await expect(locator).toHaveText("A Root Option")

Waiting Strategies

Preferred approach:

await expect(locator).toBeVisible()

Locator wait:

await locator.waitFor()

Network idle (learned but discouraged):

await page.waitForLoadState('networkidle')

Avoid:

await page.waitForTimeout()

Debugging

Pause execution

await page.pause()

Run debug mode

npx playwright test --debug

