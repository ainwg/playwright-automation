//const { test } = require("@playwright/test");
import { test, expect } from "@playwright/test";

// test("Browser Playwright Test", async ({ browser }) => {
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto("https://www.saucedemo.com");
// });

test("Page Playwright Test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("#login-button").click();
  //console.log(await page.locator("h3[data-test='error']").textContent());
  //console.log(await page.locator("div .inventory_item_name").first().textContent());
  //console.log(await page.locator("div .inventory_item_name").nth(1).textContent(),);
  console.log(await page.locator("div .inventory_item_name").allTextContents());
});

test.only("UI Controls", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const username = page.locator("#username");
  const password = page.locator("#password");
  const signInButton = page.locator("#signInBtn");
  const dropdown = page.locator("select.form-control");
  const radiobtn = page.locator(".radiotextsty");
  const okButton = page.locator("#okayBtn");
  const terms = page.locator("#terms");
  // select value from dropdown
  await dropdown.selectOption("stud");
  // select value from radio button
  await radiobtn.last().click();
  await okButton.click();
  console.log(await radiobtn.last().isChecked());
  await expect(radiobtn.last()).toBeChecked();
  await terms.click();
  await expect(terms).toBeChecked();
});
