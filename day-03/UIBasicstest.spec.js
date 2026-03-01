const { test, expect } = require('@playwright/test');

test('Browser context playwright test', async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();
  const username = page.locator('#username');
  const password = page.locator('#password');
  const signInBtn = page.locator('#signInBtn');
  await page.goto('https://rahulshettyacademy.com/loginPagePractise/');
  const title = await page.title();
  console.log(title);
  await expect(page).toHaveTitle(/Login/);

  await username.fill('rahulshetty');
  await password.fill('Learning@830$3mK2');
  await signInBtn.click();
  const errorMessage = await page.locator('[style*="display: block;"]').textContent();
  console.log(errorMessage);
  expect(errorMessage).toContain('Incorrect');

  //Enter correct username and password
  await username.fill('');
  await username.fill('rahulshettyacademy');
  await password.fill('Learning@830$3mK2');
  await signInBtn.click();
  const cardBody = page.locator('.card-body');
  await cardBody.first().textContent();
  console.log(await cardBody.first().textContent());
  
}
);

test.only('Test Login', async ({ page }) => {
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
}
);
test('Registration test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  const title = await page.title();
  const FirstName = "QAUser1";
  const LastName = "User1";
  const Password = "Test@123"; 
  const Email = "qauser1@example.com";
  const registerBtn = page.locator('.login-wrapper-footer-text');
  const fName = page.locator('#firstName');
  const lName = page.locator('#lastName');
  const email = page.locator('#userEmail');
  const phone = page.locator('#userMobile');
  const pwd = page.locator('#userPassword');
  const confirmPwd = page.locator('#confirmPassword');
  const termsCheckbox = page.locator('[type="checkbox"]');
  const submitBtn = page.locator('input[value="Register"]');
  await registerBtn.click();
  await fName.fill(FirstName);
  await lName.fill(LastName);
  await email.fill(Email);
  await phone.fill('5674567000');
  await pwd.fill(Password);
  await confirmPwd.fill(Password);  
  await termsCheckbox.check();
  await submitBtn.click();
  const successMessage = await page.locator('div > h1').first().textContent();
  console.log(successMessage);
  expect(successMessage).toContain("Account Created Successfully");
});
