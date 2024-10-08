const { expect } = require("@playwright/test");
import SELECTOR from "../support/constants";

class Shop_page {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.container_brand = page.locator(SELECTOR.SHOP.container_brand);
    this.brandChecboxes = this.container_brand.locator(SELECTOR.SHOP.checboxes);
    this.brandButtons = this.container_brand.locator(
      SELECTOR.SHOP.brands_button
    );
    this.brandSearchBox = this.container_brand.locator(
      SELECTOR.SHOP.brandSearchBox
    );
    this.productTitles = page.locator(SELECTOR.SHOP.productTitles);
    this.productCountTitle = page.locator(SELECTOR.SHOP.productCountTitle);
  }

  //CLICK
  // ana sayfadaki Shop button'u tiklamak icin
  async click_shop() {
    await this.page.getByRole("link", { name: "Shop", exact: true }).click();
  }

  // istediginiz categoriyi getirmek icin kullanabilirsiniz
  async click_one_category(category) {
    await this.page
      .locator("#shopify-section-header")
      .getByRole("link", { name: category })
      .click();
  }

  // herbir categorideki Shop All kismini tiklar
  async click_shop_all() {
    await this.page.getByRole("link", { name: "Shop All" }).click();
  }

  // herbir ckeckbox'u tiklamak icin kullanabilirsiniz
  async checkBrandCheckbox(index) {
    const checkbox = this.brandChecboxes.nth(index);
    await checkbox.waitFor({ state: "visible", timeout: 10000 });
    console.log("Getting product count from brand checkbox at index ${index}");
    await checkbox.click();
    await this.page.waitForTimeout(500);
    return checkbox;
  }

  // herhangi bir Brand aramak icin kullanilir
  async searchBrand(brandName) {
    const brandFilter = await this.brandSearchBox.fill(brandName);
    await this.page.keyboard.press("Enter");
  }

  // istenilen Brand getirmek icin kullanilir
  async getBrandFromCheckbox(index) {
    const checkbox = this.brandChecboxes.nth(index);
    return checkbox.textContent();
  }

  // filtrelenen urunlerin isimlerini getirir
  async getProductTitles() {
    return await this.productTitles.allTextContents();
  }

  // kategori kismindaki herhangi bir brand'in urun adedini alir
  async getBrandProductCount(index) {
    const brandCheckbox = this.brandChecboxes.nth(index);
    await brandCheckbox.click();
    const productCountText = await this.page
      .locator(SELECTOR.SHOP.brandQuantity)
      .innerText();
    const productCount = productCountText.match(/\((\d+)\)/)[1]; // Extract the number from the text
    return productCount;
  }

  // title kismindan urun adedini getirmek icin kullanilir
  async verifyProductCount(productCount) {
    const text = await this.page
      .locator(SELECTOR.SHOP.brandQuantity)
      .first()
      .innerText();

    // Parantezleri kaldırarak sadece sayıyı döndür
    const number = text.replace(/[()]/g, "");
    const text2 = await this.page
      .locator(SELECTOR.SHOP.productCountTitle)
      .innerText();

    // "Products" kelimesini kaldırarak sadece sayıyı döndür
    const number2 = text2.replace(" Products", "").trim();
    console.log(number2);
    expect(number).toEqual(number2);
  }

  // ////////////////////////////////////
  async click_robot_parts() {
    await this.page
      .locator("#shopify-section-header")
      .getByRole("link", { name: "Robot Parts" }) // Shop All
      .click();
  }

  async click_Batteries_Chargers_Wiring() {
    await this.page
      .getByRole("link", { name: "Batteries, Chargers & Wiring" })
      .click();
  }

  async click_adapters_cables() {
    await this.page.getByRole("link", { name: "Adapters & Cables" }).click();
  }

  //VISIBLE
  // istediginiz category'nin header kisminin visible olup-olmadigina bakar
  async is_title_displayed_general(title) {
    const category_title = await this.page.getByRole("heading", {
      name: title,
    });
    const actual_title = await category_title.textContent();
    const expected_title = await this.page
      .locator(SELECTOR.SHOP.collection_title)
      .textContent();
    expect(actual_title).toBe(expected_title);
  }

  // herbir checkbox, check edilip-edilmedigi kontrolu
  async isCheckboxChecked(checkbox) {
    return (
      (await checkbox.getAttribute("aria-checked")) === "true" ||
      (await checkbox.evaluate((el) => el.classList.contains("checked-class")))
    );
  }

  async is_title_displayed() {
    const adabter_and_cables = await this.page.getByRole("heading", {
      name: "Adapters & Cables",
    });

    await expect(adabter_and_cables).toHaveText("Adapters & Cables");
  }

  async is_url_correct(url) {
    await expect(this.page).toHaveURL(url);
  }
}

module.exports = { Shop_page: Shop_page };
