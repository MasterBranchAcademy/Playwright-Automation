const { test, expect } = require("@playwright/test");
const data = require("../tests_data/data.json");
const { Commands } = require("../support/commands");
const { Shop_page } = require("../pages/Shop_page");

test.describe("Robotics Education functionality", () => {
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
    await SP.click_one_category("Robotics Education");
    await SP.click_shop_all();
  });
test('Verify "Robotics Education" link', 
    async ({page,})=> {
      const CM = new Commands(page);
      const SP = new Shop_page(page);
      await CM.handle_cookies();
      await SP.click_shop;
      await SP.click_robotics_edu;
      await SP.click_shop_all;
      await SP.is_title_displayed_general("Robotics Education")
    });

  test('Verify that the "Robotics Education" link can be clicked', async ({page}) => {
    await SP.is_title_displayed_general("Robotics Education");
  });

  test('Verify that the first 5 "Brand" checkboxes function as expected', async ({page})=>{
    for(let i=0;i<5;i++){
      const checkbox = await SP.checkBrandCheckbox(i)
      expect(await SP.isCheckboxChecked(checkbox)).toBeTruthy();
      await checkbox.click();
      
    }
  })

  test ('Verify that the "Brand" seach box function as expected', async ({page})=>{
    const brandName = 'ACEBOTT';
    await SP.searchBrand(brandName);
    const brandChecboxes = SP.brandChecboxes;
    
  })

  test ('Verify that the correct items are displayed when clicking a checkbox', async({page})=>{
    await SP.checkBrandCheckbox(0);
    const expectedBrand = await SP.getBrandFromCheckbox(0);
    const productTitles = await SP.getProductTitles();
    for(const title of productTitles){
        expect(title).toContain(expectedBrand)
    }
  })

  test('Get all brand items from container', async({page})=>{
    await SP.getAllitems();
    
  })
});
