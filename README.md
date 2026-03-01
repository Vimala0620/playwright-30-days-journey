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

---

## Day 3 – Extracting Text & Assertions (Part 1)

### ✅ What I Learned

- How to capture text from the browser
- How to use `expect()` for assertions
- How to validate error messages
- How to handle dynamic messages that appear temporarily
- Understood how elements can appear/disappear based on UI state

---

### ✅ Scenario Practiced

When entering wrong username/password:
- An error message appears
- It stays for a few seconds
- Then disappears

The CSS condition used:
```css
[style*="block"]
**## Day 3 – Part2 Client Portal Login & Multiple Elements (Part 3)
**
### ✅ Exercise Completed

Logged into:
https://rahulshettyacademy.com/client/#/auth/login

Goal:
- Login successfully
- Capture list of products
- Print the first product name

---

### ✅ Key Learning

- How to work with locators returning multiple elements
- How Playwright waits when multiple matches exist
- How to use:
  - `.count()`
  - `.first()`
  - `.nth(index)`
- Understood that locators are lazy (not resolved immediately)

---

### ✅ Practice Code

```js
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    const title = await page.title();
    const Email = "qauser1@example.com";
    const Password = "Test@123";
    const unameLoc = page.locator('[id="userEmail"]');
    const pwdLoc = page.locator('[id="userPassword"]');
    const signInBtnLoc = page.locator('[id="login"]');
    await unameLoc.fill(Email);
    await pwdLoc.fill(Password);
    await signInBtnLoc.click();
    const chk = await page.locator('div>h5>b').first().textContent();    
    console.log(chk);
    expect(chk).toContain("ADIDAS ORIGINAL");
### 🛠 Learned About Debug Mode (Very Helpful)

Discovered Playwright Debug Mode which helped me:

- Slow down execution
- Inspect locators visually
- Step through test execution
- Understand what is happening behind the scenes

Command used:

```bash
npx playwright test --debug
What Happens Normally (Without --debug)

When you run:

npx playwright test

Playwright:

Launches browser

Runs test very fast

Closes browser immediately after test finishes

Ends process

Everything is optimized for speed.

No pauses.
No stepping.
No manual inspection.

✅ What Happens With --debug

When you run:

npx playwright test --debug

Playwright switches to debug mode.

Internally, it does several things differently:

🔹 1️⃣ Headed Mode Automatically Enabled

Even if your config says headless true:

Debug mode forces:

headless: false

So you can see the browser.

🔹 2️⃣ Execution Is Slowed Down

It enables:

slowMo

So actions happen step-by-step.

Not instantly.

🔹 3️⃣ Playwright Inspector Is Activated

This is the biggest change.

Playwright launches:

🛠 Inspector Tool

The inspector:

Pauses before each action

Shows current step

Lets you step forward manually

Shows locator highlight

Lets you inspect DOM

That’s why test does NOT close immediately.

It is waiting for YOU.

🔹 4️⃣ Auto-Wait + Breakpoint Behavior

When you use:

await page.pause();

Playwright:

Injects a breakpoint

Suspends test execution

Keeps browser open

Waits for resume

So test is intentionally frozen.

🔥 Why Test Does Not Close

Because debug mode:

Prevents automatic process exit

Keeps event loop alive

Waits for user interaction in inspector

Does not finalize test runner immediately

In simple words:

Normal mode → Run & Exit
Debug mode → Run & Wait for Human

🎯 Deep Understanding

Playwright Test Runner normally controls lifecycle:

Start → Execute → Cleanup → Close → Exit

Debug mode modifies lifecycle to:

Start → Execute Step-by-Step → Wait for Inspector → Cleanup after manual resume

That’s why browser stays open.

💡 Why This Is Powerful

Debug mode helps you:

See auto-wait in action

Observe dynamic element appearance

Understand locator resolution

Fix flaky tests

Build confidence

Professionals use this daily.

🔎 One More Important Difference

If you run:

npx playwright test --headed

Browser is visible BUT:

It still closes immediately after test.

Because debug mode ≠ headed mode.

Debug mode = headed + inspector + pause control.
