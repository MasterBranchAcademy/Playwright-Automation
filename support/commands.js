const { expect } = require("@playwright/test");
import SELECTOR from "../support/constants";

class Commands {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async handle_cookies() {
    await this.page.getByLabel("allow cookies").click();
  }
}

module.exports = { Commands: Commands };
