const PLAYWRIGHT_ATTRIBUTES = {
  TIMEOUTS: {
    POST_LOAD: 60000,
  },

  GENERAL: {
    LOGIN_SIGNUP: ".header__action-item-title",
  },
  SHOP: {
    collection_title: '.collection__title',
    container_brand: '.boost-pfs-filter-option-brand',
    brands_button: '.boost-pfs-filter-option-item', //'.boost-pfs-filter-button', 
    checboxes: '.boost-pfs-check-box',
    brandSearchBox: '.boost-pfs-filter-option-show-search-box',
    productTitles: '.boost-pfs-filter-product-item-vendor', // each product
    brandQuantity: '.boost-pfs-filter-option-amount',   // from brandlist
    productCountTitle: '.boost-pfs-filter-total-product', // from title part
  },
};

export default PLAYWRIGHT_ATTRIBUTES;