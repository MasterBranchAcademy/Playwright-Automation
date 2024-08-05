const { test, expect } = require("@playwright/test");
const data = require("../tests_data/data.json");
const { Commands } = require("../support/commands");
const { Shop_page } = require("../pages/Shop_page");


test.beforeEach(async ({ page }) => {
  await page.goto(data.urls.base_url);
  await page.getByRole("button", { name: "No, thanks" }).click(); 
});

test.describe("Shop Page Tests", () => {
  test.beforeAll(async () => {
    test.setTimeout(60000);
  });

  test.skip("The user should navigate to adapters and cables page successfully", async ({
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

  test('Verify that the "Robots & Kits" link can be clicked', async ({
    page,
  }) => {
    const CM = new Commands(page);
    const SP = new Shop_page(page);
    await CM.handle_cookies();
    await SP.click_shop();
    await SP.click_one_category("Robots & Kits");
    await SP.click_shop_all();
    await SP.is_title_displayed_general("Robots & Kits")
  });

  test('Verify that the first 5 "Brand" checkboxes function as expected', async ({page})=>{
    const CM = new Commands(page);
    const SP = new Shop_page(page);
    await CM.handle_cookies();
    await SP.click_shop();
    await SP.click_one_category("Robots & Kits");
    await SP.click_shop_all();
    for(let i=0;i<5;i++){
      const checkbox = await SP.checkBrandCheckbox(i)
      await page.pause();
      expect(await SP.isCheckboxChecked(checkbox)).toBeTruthy();
      await checkbox.click();
      await page.waitForTimeout(500);
      await page.pause();
      expect(await SP.isCheckboxChecked(checkbox)).toBeFalsy();
    }
  })
});
