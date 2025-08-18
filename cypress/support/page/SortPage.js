class SortPage {
  sortDropdown = '[data-test="product-sort-container"]';
  productNames = '.inventory_item_name';
  productPrices = '.inventory_item_price';

  // pilih opsi sort berdasarkan value di <option>
  selectSort(optionValue) {
    cy.get(this.sortDropdown).select(optionValue);
  }

  // ambil semua nama produk
  getProductNames() {
    return cy.get(this.productNames).then($names => [...$names].map(el => el.innerText));
  }

  // ambil semua harga produk (konversi ke number)
  getProductPrices() {
    return cy.get(this.productPrices).then($prices => [...$prices].map(el => parseFloat(el.innerText.replace('$', ''))));
  }
}

export default  SortPage;
