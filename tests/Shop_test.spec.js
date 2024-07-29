const { test, expect } = require("@playwright/test");
const data = require("../tests_data/data.json");
const { Home_page } = require("../pages/Home_page");
const { Commands } = require("../support/commands");
const { Shop_page } = require("../pages/Shop_page");

test.beforeEach(async ({ page }) => {
  await page.goto(data.urls.base_url);
});

test.describe("Shop Page Tests", () => {
  test.beforeAll(async () => {
    test.setTimeout(60000);
  });

  test("The user should navigate to adapters and cables page successfully", async ({
    page,
  }) => {
    const CM = new Commands(page);
    const SP = new Shop_page(page);

    await CM.handle_cookies();
    await SP.click_shop();
    await SP.click_robot_parts();
    await SP.click_Batteries_Chargers_Wiring();
    await SP.click_adapters_cables();
    await SP.is_title_displayed();
    await SP.is_url_correct(data.urls.adapters_cables_url);
  });
});
