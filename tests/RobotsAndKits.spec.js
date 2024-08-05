const { test, expect } = require("@playwright/test");
const data = require("../tests_data/data.json");
const { Commands } = require("../support/commands");
const { Shop_page } = require("../pages/Shop_page");

test.describe("Robots & Kits Category Tests", () => {
  let CM;
  let SP;

  test.beforeAll(async () => {
    test.setTimeout(60000);
  });

  test.beforeEach(async ({ page }) => {
    CM = new Commands(page);
    SP = new Shop_page(page);

    await page.goto(data.urls.base_url);
    await page.getByRole("button", { name: "No, thanks" }).click();
    await CM.handle_cookies();
    await SP.click_shop();
    await SP.click_one_category("Robots & Kits");
    await SP.click_shop_all();
  });

  test('Verify that the "Robots & Kits" link can be clicked', async ({page}) => {
    await SP.is_title_displayed_general("Robots & Kits");
  });

  test('Verify that the first 5 "Brand" checkboxes function as expected', async ({page})=>{
    for(let i=0;i<5;i++){
      const checkbox = await SP.checkBrandCheckbox(i)
      expect(await SP.isCheckboxChecked(checkbox)).toBeTruthy();
      await checkbox.click();
      await page.waitForTimeout(500);
      await page.pause();
      expect(await SP.isCheckboxChecked(checkbox)).toBeFalsy();
      await page.waitForTimeout(500)
    }
  })

  test ('Verify that the "Brand" seach box function as expected', async ({page})=>{
    const brandName = 'robotic';
    await SP.searchBrand(brandName);
    const brandChecboxes = SP.brandChecboxes;
    const checkboxCount = await brandChecboxes.count();
    console.log(checkboxCount);
    await page.pause();
    expect(checkboxCount).toBeGreaterThan(1);
  })

  test ('Verify that the correct items are displayed when clicking a checkbox', async({page})=>{
    await SP.checkBrandCheckbox(0);
    const expectedBrand = await SP.getBrandFromCheckbox(0);
    const productTitles = await SP.getProductTitles();
    for(const title of productTitles){
        expect(title).toContain(expectedBrand)
    }
  })

  test('Verify the count of the products from checkboxes and title', async({page})=>{
    const productCount = await SP.checkBrandCheckbox(0);
    await SP.verifyProductCount(productCount);
  })

});
