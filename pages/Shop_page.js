const { expect } = require("@playwright/test");
import SELECTOR from "../support/constants";

class Shop_page {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
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
    const expected_title = await this.page.locator(SELECTOR.SHOP.collection_title).textContent();
    expect(actual_title).toBe(expected_title);
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
