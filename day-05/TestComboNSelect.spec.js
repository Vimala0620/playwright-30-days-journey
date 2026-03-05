// code to use combo and select dropdown in test cases
const { test, expect } = require("@playwright/test");
const { Dropdown } = require("./utils");

test("Test ComboBox and Select Dropdown", async ({ page }) => {

    await page.goto("https://demoqa.com/select-menu");

    const title = await page.title();
    console.log("Page title:", title);
    // -------- Native Select Dropdown --------
    // const dropdown = new Dropdown(page, page.locator("#oldSelectMenu"));
    // await dropdown.selectOption("Indigo");
    // const allOptions = await dropdown.getAllOptions();
    // console.log("All dropdown options:", allOptions);
    const combo = page.locator("#react-select-2-input");
    const comboDropdown = new Dropdown(page, combo);
    // -------- React Combobox --------
    await comboDropdown.comboBox("A Root Option",combo);
    // await combo.click();

    // const option = page.getByText("A Root Option");

    // await expect(option).toBeVisible();

    // await option.click();

    // await expect(page.getByText("A Root Option").last()).toBeVisible();


});
