/// <reference types="cypress" />
import LoginPage from '../support/page/LoginPage';
import CartPage from '../support/page/CartPage';

describe('Cart page',function ()  {
    const loginPage = new LoginPage();
    const cartpage = new CartPage();
    beforeEach(function () {
        cy.fixture('credentials').as('cred');
        loginPage.visit(); // Mengunjungi halaman login sebelum setiap test

        cy.get('@cred').then((cred) => {  // login dengan data dari fixture

    loginPage.login(cred.validCredentials.username, cred.validCredentials.password);        
    cy.url().should('include', '/inventory.html');
    });
    });

    it('should add two items', () => {
        //menambahkan 2 item ke keranjang
        cartpage.addBackpackToCart();
        cartpage.addBikeLightToCart();
        //membuka halaman keranjang
        cartpage.openCartPage();
        //verifikasi cart badge menunjukkan 2 item
        cartpage.verifyCartBadgeAuto();
    });

    it('should add more items', () => {
        //menambahkan 3 item ke keranjang
        cartpage.addBackpackToCart();
        cartpage.addBikeLightToCart();
        cartpage.addBoltTShirtToCart();
        //membuka halaman keranjang
        cartpage.openCartPage();
        //verifikasi cart badge menunjukkan 3 item
        cartpage.verifyCartBadgeAuto();
        
    });
    it('Should remove product', () => {
        //menambahkan item ke keranjang
        cartpage.addBackpackToCart();
        //membuka halaman keranjang
        cartpage.openCartPage();
        //verifikasi cart badge menunjukkan 1 item
        cartpage.verifyCartBadgeAuto();
        //menghapus item dari keranjang
        cartpage.verifyRemoveBtn().click();
        //verifikasi cart badge menunjukkan 0 item
        cartpage.verifyRemoveBtnEmpty();
    });

    it('should finish checkout', () => {
        //menambahkan 2 item ke keranjang
        cartpage.addBackpackToCart();
        cartpage.addBikeLightToCart();
        //membuka halaman keranjang
        cartpage.openCartPage();
        //verifikasi cart badge menunjukkan 2 item
        cartpage.verifyCartBadgeAuto();
        //klik tombol checkout
        cartpage.verifyCheckoutBtn().click();
        //mengisi form checkout
        cartpage.fillCheckoutForm(' agum', 'ruswandi', '12345');
        //klik tombol continue
        cartpage.verifyContinueBtn().click();
        //assert konfirmasi order
        cy.contains('Checkout: Overview').should('be.visible');
        //verifikasi tombol finish terlihat
        cartpage.verifyFinishBtn().click();
        //assert pesan "Thank you for your order!"
        cy.contains('Thank you for your order!').should('be.visible');
        //verifikasi kembali ke halaman inventory
        cartpage.verifybackbtn().click();
        cy.url().should('include', '/inventory.html');
        
    });

    it('should cancel checkout', () => {
        //menambahkan 2 item ke keranjang
        cartpage.addBackpackToCart();   
        cartpage.addBikeLightToCart();
        //membuka halaman keranjang
        cartpage.openCartPage();
        //verifikasi cart badge menunjukkan 2 item
        cartpage.verifyCartBadgeAuto();
        //klik tombol checkout
        cartpage.verifyCheckoutBtn().click();
        //mengisi form checkout
        cartpage.fillCheckoutForm(' agum', 'ruswandi', '12345');
        //klik tombol continue
        cartpage.verifyContinueBtn().click();
        //assert konfirmasi order
        cy.contains('Checkout: Overview').should('be.visible');
        //klik tombol cancel
        cartpage.verifycancelbtn().click();
        //verifikasi kembali ke halaman cart
        cy.url().should('include', '/inventory.html');
        //verifikasi cart badge masih menunjukkan 2 item
        cartpage.verifyCartBadge(2);
    });

    it('should be able to check out without adding any items.', () => {
        //membuka halaman keranjang
        cartpage.openCartPage();
        //verifikasi cart badge menunjukkan 0 item
        cartpage.verifyRemoveBtnEmpty();
        //klik tombol checkout
        cartpage.verifyCheckoutBtn().click();
        //mengisi form checkout
        cartpage.fillCheckoutForm(' agum', 'ruswandi', '12345');
        //klik tombol continue
        cartpage.verifyContinueBtn().click();
        //assert konfirmasi order
        cy.contains('Checkout: Overview').should('be.visible');
        cy.contains('Total: $0.00').should('be.visible');
    });
});