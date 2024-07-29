const { test, expect } = require("@playwright/test");
const data = require("../tests_data/data.json");
const { Home_page } = require("../pages/Home_page");

test.beforeEach(async ({ page }) => {
  await page.goto(data.urls.base_url);
});

test.describe("Home Page Tests", () => {
  test.beforeAll(async () => {
    test.setTimeout(60000);
  });

  test("The home page should load successfully", async ({ page }) => {
    const HP = new Home_page(page);

    await HP.is_home_page_displayed(data.urls.base_url, "Login / Signup");
  });
});
