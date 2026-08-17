// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  reporter: "html",
  use: {
    //trace: 'on-first-retry',
    browserName: "chromium",
  },
});
