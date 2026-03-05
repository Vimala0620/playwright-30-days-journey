const { expect } = require("@playwright/test");

// Reusable class for Select dropdown and React combobox
class Dropdown {
    constructor(page, locator) {
        this.page = page;
        this.locator = locator;
    }

    // -------- Native <select> dropdown --------
    async selectOption(value) {
        await this.locator.selectOption({ label: value });

        const selectedOptionLabel = await this.locator.evaluate((select) => {
            return select.options[select.selectedIndex].label;
        });

        console.log("Selected option:", selectedOptionLabel);

        await expect(selectedOptionLabel).toEqual(value);
    }

    async getSelectedOption() {
        const selectedOptionLabel = await this.locator.evaluate((select) => {
            return select.options[select.selectedIndex].label;
        });

        console.log("Selected option:", selectedOptionLabel);

        return selectedOptionLabel;
    }

    async getAllOptions() {
        return await this.locator.evaluate((select) => {
            return Array.from(select.options).map((option) => option.label);
        });
    }

    // -------- React Select / Combobox --------
    async comboBox(optionText, comboLocator) {

        await comboLocator.click();

        const option = this.page.getByText(optionText);

        await expect(option).toBeVisible();

        await option.click();

        await expect(this.page.getByText(optionText).last()).toBeVisible();
    }
}

module.exports = { Dropdown };
