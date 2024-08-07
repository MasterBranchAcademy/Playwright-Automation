const PLAYWRIGHT_ATTRIBUTES = {
  TIMEOUTS: {
    POST_LOAD: 60000,
  },

  GENERAL: {
    LOGIN_SIGNUP: ".header__action-item-title",
  },
  SHOP: {
    collection_title: ".collection__title",
    container_brand: ".boost-pfs-filter-option-brand",
    brands_button: ".boost-pfs-filter-option-item", //'.boost-pfs-filter-button',
    checboxes: ".boost-pfs-check-box",
    brandSearchBox: ".boost-pfs-filter-option-show-search-box",
    productTitles: ".boost-pfs-filter-product-item-vendor", // each product
    brandQuantity: ".boost-pfs-filter-option-amount", // from brandlist   // #boost-pfs-filter-tree2-pf-v-brand
    productCountTitle: ".boost-pfs-filter-total-product", // from title part    //  #shopify-section-template--15797361967272__product-grid
  },
};

//   await expect(page.locator('#boost-pfs-filter-tree2-pf-v-brand')).toContainText('3');
// await expect(page.locator('#shopify-section-template--15797361967272__product-grid')).toContainText('3');

export default PLAYWRIGHT_ATTRIBUTES;
