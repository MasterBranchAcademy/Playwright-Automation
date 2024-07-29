const { expect } = require("@playwright/test");

class Shop_page {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  //CLICK
  async click_shop() {
    await this.page.getByRole("link", { name: "Shop", exact: true }).click();
  }

  async click_robot_parts() {
    await this.page
      .locator("#shopify-section-header")
      .getByRole("link", { name: "Robot Parts" })
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
