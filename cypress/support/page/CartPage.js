class Cart {
    addtocartBackpack = '[data-test="add-to-cart-sauce-labs-backpack"]';
    addtocartBikeLight = '[data-test="add-to-cart-sauce-labs-bike-light"]';
    addtocartboltTShirt = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]';
    opencart = '[data-test="shopping-cart-link"]';
    cartbadge = '[data-test="shopping-cart-badge"]';
    checkoutbtn = '[data-test="checkout"]';
    continuebtn = '[data-test="continue"]';
    finishbtn = '[data-test="finish"]';
    removebtn = 'button[data-test^="remove"]';
    firtsname = '[data-test="firstName"]';
    lastname = '[data-test="lastName"]';
    postalcode = '[data-test="postalCode"]';
    finishbtn = '[data-test="finish"]';
    backtobtn = '[data-test="back-to-products"]';
    cancelbtn = '[data-test="cancel"]';

    // Method untuk menambahkan item 1 ke keranjang
    addBackpackToCart() {
        cy.get(this.addtocartBackpack).click();
    }
    // Method untuk menambahkan item 2 ke keranjang
    addBikeLightToCart() {
        cy.get(this.addtocartBikeLight).click();
    }
    // Method untuk menambahkan item 3 ke keranjang
    addBoltTShirtToCart() {
        cy.get(this.addtocartboltTShirt).click();
    }
    // Method untuk membuka halaman keranjang
    openCartPage() {
        cy.get(this.opencart).click();
    }
    // Method untuk memverifikasi jumlah item di cart badge
    verifyCartBadge(expectedCount) {
        cy.get(this.cartbadge).should('have.text', expectedCount.toString());
    }
    // Method untuk memverifikasi tombol checkout, continue, remove, back,cancel dan finish
    verifyCheckoutBtn() {
       return cy.get(this.checkoutbtn).should('be.visible');
    }
    verifyContinueBtn() {
        return cy.get(this.continuebtn).should('be.visible');
    }
    verifyFinishBtn() {
       return  cy.get(this.finishbtn).should('be.visible');
    }

    verifyRemoveBtn() {
       return  cy.get(this.removebtn).should('be.visible');
    }
    verifybackbtn() {
       return  cy.get(this.backtobtn).should('be.visible');
    }
    verifycancelbtn() {
       return  cy.get(this.cancelbtn).should('be.visible');
    }
    // Method untuk memverifikasi tombol remove sesuai jumlah item di keranjang
    verifyCartBadgeAuto() {
        cy.get(this.removebtn).its('length').then((removeCount) => {
            cy.get(this.cartbadge).should('have.text', removeCount.toString());
        });
    }
    // Method untuk memverifikasi tombol remove kosong
    verifyRemoveBtnEmpty() {
        cy.get(this.removebtn).should('not.exist');
    }
    // Method untuk mengisi form checkout
    fillCheckoutForm(firstname, lastname, postalcode) {
        cy.get(this.firtsname).type(firstname);
        cy.get(this.lastname).type(lastname);
        cy.get(this.postalcode).type(postalcode);
    }
}
export default Cart;
