const { test } = require("@playwright/test");
//import { test, expect } from '@playwright/test';

test("Browser Playwright Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.saucedemo.com");
});

test("Page Playwright Test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
});
