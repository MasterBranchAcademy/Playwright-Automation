const { expect } = require("@playwright/test");
import SELECTOR from "../support/constants";

class Home_page {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.login_signup = page.locator(SELECTOR.GENERAL.LOGIN_SIGNUP);
  }

  async is_home_page_displayed(url, expected_login_signup_text) {
    await expect(this.page).toHaveURL(url);

    const actual_login_signup_text = await this.login_signup;
    await expect(actual_login_signup_text).toHaveText(expected_login_signup_text);
  }
}

module.exports = { Home_page: Home_page };
