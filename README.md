# Playwright 30 Days Learning Journey 🚀

## Goal
To become confident in Playwright automation by practicing daily for 30 days.

---

## Day 1 – Project Setup & First Test

### ✅ What I Did
- Installed Node.js
- Installed VS Code
- Initialized Playwright project using: npm init playwright
- - Understood project structure:
- `tests/` → where test files are written
- `package.json` → dependencies & scripts
- `playwright.config.js` → test configuration

---

### ✅ Created First Test File
File: `UIBasicsTest.spec.js`

Wrote a basic test to:
- Launch browser
- Navigate to Rahul Shetty Academy login page
- Run test using:
npx playwright test --headed

---

## Day 2 – CSS Selectors & Login Automation

### ✅ What I Learned

- What CSS selectors are
- How to construct CSS locators
- How to inspect elements using browser DevTools
- How to enter text into input fields
- How to click a button using Playwright
- Practiced some interview-based questions
- Created `day-02/interviewquestions.md`

---

### ✅ CSS Selector Basics (Quick Notes)

#### 1. Select by ID
```css
#username
2. Select by Class
.form-control
3. Select by Tag
input
4. Tag + ID
input#username
5. Tag + Class
input.form-control
6. Attribute Selector
input[type="text"]
7. Parent > Child
div > input
8. Contains text (Playwright specific)
page.locator("text=Sign In")
