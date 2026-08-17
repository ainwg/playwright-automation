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
  console.log(
    await page.locator("div .inventory_item_name").first().textContent(),
  );
  console.log(
    await page.locator("div .inventory_item_name").nth(1).textContent(),
  );
});
